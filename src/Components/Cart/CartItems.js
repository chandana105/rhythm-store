import CartHeader from "./CartHeader";
import CartCard from "./CartCard";
import { useCart } from "../../Contexts/cart-context";

const CartItems = () => {
  const { cartItems } = useCart();
  return (
    <div className="cartItems">
      <CartHeader />
      {cartItems.map((item) => (
        <CartCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CartItems;


