import Link from 'next/link';
import Button from '@material-ui/core/Button';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CartSingle from './CartSingle';
import {connect} from "react-redux";

const CartItem = ({currentProducts, cartTotal, dispatch}) => {
  let handleClick = () => {
    dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: post.id});
  }
    return (
        <React.Fragment>
    <table>
      <thead>
    <tr className="headrow">
    <th className="delete"></th>
    <th className="prod">Product</th>
    <th className="pri">Price</th>
    <th className="qua">Qauntity</th>
    <th className="tot">Total</th>
  </tr>
  </thead>
  <tbody>
  {currentProducts.map((product, index) => 
<CartSingle key={index} product={product} dispatch={dispatch}/>
  )}
  </tbody>
  <tfoot className="cart-foot">
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td className="cart-total">{cartTotal}</td>
    </tr>
  </tfoot>
    </table>
    <style jsx>{`
    table {
      margin:0 auto;
    }
    .cart-total {
      font-weight:700;
      font-family:"Roboto", Arial;
    }
    .cart-foot {
      background-color:#eee;
    }
    .cart-foot td {
      padding:10px
    }
.headrow {
  background-color:#eee
}
th {
  padding:10px;
  font-family:"Roboto", Arial;
  font-size:18px
}
    .delete {
      with:10%
    }
    .prod {
      with:10%
    }.pri {
      with:10%
    }.qua {
      with:10%
    }.tot {
      with:10%
    }
      `}</style>
    </React.Fragment>
    );
}

    const mapStateToProps = ({products}) => ({
      currentProducts: products.currentProducts,
      cartTotal: products.currentProducts.reduce((accumalatedAmuont, product) => accumalatedAmuont + product.quantity*product.price , 0)
    });
export default connect(mapStateToProps)(CartItem);
