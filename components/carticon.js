import {connect} from 'react-redux';

const CartIcon = ({cartItems}) => {
return (<>
        <div className="cart-Icon_wrap">
        <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#000"></path></svg>
        {cartItems ? <span className="item-number">{cartItems}</span> : ''}
        </div>
      <span>Cart</span>
<style jsx>{`
.cart-Icon_wrap {
    position:relative;
    }
    .item-number {
      position: absolute;
      top: 8%;
      left: 35%;
      text-align: center;
      border-radius: 7px;
      width: 18px;
      height: 18px;
      background-color: #ff6161;
      border: 1px solid #fff;
      font-weight: 400;
      color: #f0f0f0;
      line-height: 16px;
      font-size: 12px;
    }
    svg {
      margin: 0 8px;
    }
`}</style>
      </>
);
}
const mapStateToProps = ({products : {currentProducts}}) => ({
    cartItems: currentProducts.reduce((accumalatedQuantity, product) => accumalatedQuantity + product.quantity , 0)
  });
export default connect(mapStateToProps)(CartIcon);