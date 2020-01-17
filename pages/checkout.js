import {connect} from "react-redux";
import {Component} from 'react';
import CartItem from '../components/CartItem/CartItem'
import Layout from '../components/Layout'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const wooApi = new WooCommerceRestApi({
	url: "https://backend.ontimewebservices.com",
	consumerKey:"ck_6133b2fafb3c21831585646024df12dd28a9ef50",
	consumerSecret: "cs_4c55e96015936f51a54e7d841cd19f9d7ab5bb4a",
	version: "wc/v3"
});

class Checkout extends Component {
    constructor(pops) {
        super(pops);
    this.state = {
        firstName:'',
        lastName: '',
        address_1:'',
        address_2:'',
        phone:'',
        email:'',
        postcode:'',
        country:'',
        city:'',
    }
    this.orderItems = this.props.currentProducts.map(product => {
        const order = {};
        order.product_id = product.id;
        order.quantity = product.quantity
        return order
    })
    }
    
    handleOrder = (e) => {
        e.preventDefault();
        console.log(1212, this.orderItems)
        const data = {
            payment_method: "Cash on delivery",
            payment_method_title: "Cash on Delivery",
            set_paid: true,
            billing: {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                address_1: this.state.address_1,
                address_2: this.state.address_2,
                city: this.state.city,
                state: this.state.state,
                postcode: this.state.postcode,
                country: this.state.country,
                email: this.state.email,
                phone: this.state.phone
            },
            shipping: {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                address_1: this.state.address_1,
                address_2: this.state.address_2,
                city: this.state.city,
                state: this.state.state,
                postcode: this.state.postcode,
                country: this.state.country,
                email: this.state.email,
                phone: this.state.phone
            },
            line_items: 
                this.props.currentProducts.map(product => {
                    const order = {};
                    order.product_id = product.id;
                    order.quantity = product.quantity
                    return order
                })
              
        }
        wooApi.post("orders", data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        console.log(121222222, this.orderItems)

        return (<Layout>
            <div className="main top-pad">
            <h1>Checkout</h1>
            <div className="details">
            <form onSubmit={this.handleOrder}>
            <div>
            <label>
            <p>First Name</p>  
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
            <p>Last Name</p>   
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
            <p>Country</p>   
            <input type="text" name="country" value={this.state.country} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
            <p>Address</p>   
            <input type="text" name="address_1" value={this.state.address_1} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
            <p>Address line 2</p>   
            <input type="text" name="address_2" value={this.state.address_2} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
            <p>City</p>   
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
            <p>State</p>   
            <input type="text" name="state" value={this.state.state} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
            <p>Zip</p>   
            <input type="text" name="postcode" value={this.state.postcode} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
            <p>Email</p>   
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
            <p>Phone</p>   
            <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/>
            </label>
            </div>
            <button type="submit">PLACE ORDER</button>
            </form>
            </div>
            <div className="order">
            <CartItem/>
            </div>
        <style jsx>{`
        form {
            margin:15px;
        }
        label p{
            display:block;
            margin:0 0 5px 0;
        }
        form div {
            margin:15px auto;
        }
        .main {
            margin:0 auto;
            width:100%;
        }
        .details {
            width:68%;
            float:left
        }
        .order {
            float:left
            width:28%;
        }
        h1 {
            text-align:center;
        }
        `}</style>
            </div>
            </Layout>
        );
    }
}

const mapStateToProps = ({products}) => ({
    currentProducts: products.currentProducts,
    cartTotal: products.currentProducts.reduce((accumalatedAmuont, product) => accumalatedAmuont + product.quantity*product.price , 0)
});

export default connect(mapStateToProps)(Checkout);