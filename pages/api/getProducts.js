
const wooConfig = require( '../.././wooConfig' );
const WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
	url: wooConfig.siteUrl,
	consumerKey: wooConfig.consumerKey,
	consumerSecret: wooConfig.consumerSecret,
	wpAPI: true,
	version: 'wc/v3'
});


export default (req, response) => {
    WooCommerce.get('products', function(err, data, res) {
        response.json( JSON.parse(res) )
    });
}