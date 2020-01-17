import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CartItem from '../components/CartItem/CartItem'
import Link from 'next/link';

const Cart = () => {
  return (
    <Layout>
      <div className="top-pad">
     <Container maxWidth="xl">
          <CartItem/>
      <div>
      <Link href="/checkout"><a><button className="cart-checkout">Checkout</button></a></Link>
      </div>
      </Container>
  <style jsx>{`
  .cart-checkout {
    background-color:#000;
    color:#fff;
    padding:10px;
    border:none;
    float:right
  }`}</style>
      </div>
      </Layout>
      );
}

export default Cart;
