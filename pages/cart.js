import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CartItem from '../components/CartItem/CartItem'

const Cart = () => {
  return (
    <Layout>
      <div className="top-pad">
     <Container maxWidth="xl">
     <Grid container spacing={3}> 
          <CartItem/>
      </Grid>
      </Container>
      </div>
      </Layout>
      );
}

export default Cart;
