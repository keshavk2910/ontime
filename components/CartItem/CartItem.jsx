import Link from 'next/link';
import Button from '@material-ui/core/Button';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CartSingle from './CartSingle';
import {connect} from "react-redux";

const CartItem = ({currentProducts, dispatch}) => {
  let handleClick = () => {
    dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: post.id});
  }
    return (
        <React.Fragment>
    <table width="100%">
    <tr className="headrow">
    <th className="delete"></th>
    <th className="prod">Product</th>
    <th className="pri">Price</th>
    <th className="qua">Qauntity</th>
    <th className="tot">Total</th>
  </tr>
  {currentProducts.map(product => 
<CartSingle product={product} dispatch={dispatch}/>
  )}
    </table>
    <style jsx>{`
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
      currentProducts: products.currentProducts
    });
export default connect(mapStateToProps)(CartItem);
