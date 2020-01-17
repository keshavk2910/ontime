const CartSingle = ({product, dispatch}) => {
    let handleDelete = () => {
      dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: product.id});
    }
      return (
        <tr>
        <td><span onClick={handleDelete}>DEL</span></td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>{product.price*product.quantity}</td>
        </tr>
      );
}
export default CartSingle;