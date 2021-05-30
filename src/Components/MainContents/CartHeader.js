import {useCart} from '../../Contexts/cart-context';
import {totalItems, totalPrice} from '../../Utils/utils'

const CartHeader = () => {
  const {cartItems} = useCart();


  return (
    <div className="side-bar-box">
      <span>My Cart <b>({totalItems(cartItems)} Items</b>)</span>
      <span>Total : <b>Rs. {totalPrice(cartItems)}</b></span>
    </div>
  );
};

export default CartHeader;
