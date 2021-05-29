import {useCart} from '../../Contexts/cart-context'

const CartHeader = () => {
  const {cartItems} = useCart();
  const itemsInCart = cartItems.length
  return (
    <div className="side-bar-box">
      <span>My Cart ({itemsInCart} {itemsInCart === 1 ? 'Item' : 'Items'})</span>
      <span>Total Rs. 1,021</span>
    </div>
  );
};

export default CartHeader;
