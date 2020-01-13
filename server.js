const next = require( 'next' );
const express = require( 'express' );
const wooConfig = require( './wooConfig' );
const cacheableResponse = require('cacheable-response')
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

var redis = require("redis"),
	client = redis.createClient();

	client.on("connect", function () {
		console.log("connected ");
});

setInterval(function () { 
	client.FLUSHALL(function(err, reply) {
		console.log('Redis Interval', reply); 
	})
}, 7200000);


const wooApi = new WooCommerceRestApi({
	url: wooConfig.siteUrl,
	consumerKey: wooConfig.consumerKey,
	consumerSecret: wooConfig.consumerSecret,
	version: "wc/v3"
});

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


const ssrCache = cacheableResponse({
	ttl: 1000 * 60 * 60, // 1hour
	get: async ({ req, res, pagePath, queryParams }) => ({
	  data: await app.renderToHTML(req, res, pagePath, queryParams),
	}),
	send: ({ data, res }) => res.send(data),
  })


app.prepare()
	.then( () => {
		const server = express();

		server.get( '/getProducts', ( req, res ) => {
			const query = req.query;
			var queryString = encodeData(query);
			function encodeData(data) {
				return Object.keys(data).map(function(key) {
					return [key, data[key]].map(encodeURIComponent).join("=");
				}).join("&");
			}  

			client.mget([`products-${queryString}`, `totalProducts-${queryString}`], function(err, reply) {
				if(reply[0] == null) {
					wooApi.get(`products?${queryString}`) 
					.then((response) => {
					const Total = response.headers['x-wp-total'];
					client.set(`products-${queryString}`, JSON.stringify(response.data));
					client.set(`totalProducts-${queryString}`, Total);
					res.set('Redis', 'MISS')
					res.set('Total-Products', Total)
					res.json(response.data)
					}).catch((error) => {
						res.json(error)
					})
				
				} else {
					res.set('Total-Products', reply[1])
					res.set('Redis', 'HIT')
					res.json(JSON.parse(reply[0]))
				}
			})
	});

	server.get( '/getCatId', ( req, res ) => {
		const slugy = req.query.slug

		client.get(`productCat-${slugy}`, function(err, reply) {
			if(reply == null) {
				wooApi.get(`products/categories`, {slug:slugy}) 
					.then((response) => {
					client.set(`productsCat-${slugy}`, JSON.stringify(response.data));
					res.set('Redis', 'MISS')
					res.json(response.data)
					}).catch((error) => {
						res.json(error)
					})
			} else {
				res.set('Redis', 'HIT')
				res.json(JSON.parse(reply))
			}
		})
});

	server.get( '/getSingleProduct', ( req, res ) => {
		const slugy = req.query.slug
		client.get(`product-${slugy}`, function(err, reply) {
			if(reply == null) {
			wooApi.get(`products`, {slug:slugy}) 
					.then((response) => {
					client.set(`product-${slugy}`, JSON.stringify(response.data));
					res.set('Redis', 'MISS')
					res.json(response.data)
					}).catch((error) => {
						res.json(error)
			})
			} else {
				res.set('Redis', 'HIT')
				res.json(JSON.parse(reply))
			}
		})
				
});
		server.get( '/backredisc', ( req, response ) => {
			client.FLUSHALL(function(err, reply) {
				if(reply === 'OK') {
					response.sendStatus(200)
				} else {
					response.raw(err)
				}
				console.log('Redis Cleared')
			})
		});
		server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }))
		server.get('/about*', (req, res) => ssrCache({ req, res, pagePath: '/about' }))
		server.get( '*', ( req, res ) => {
			return handle( req, res );
		} );

		server.listen( port, err => {
			if ( err ) {
				throw err;
			}
			console.log( `Ready on ${port}` );
		} )

	} )
	.catch(ex => {
	console.error(ex.stack);
	process.exit(1);
});