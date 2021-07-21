import CartHeader from "./CartHeader";
import CartCard from "./CartCard";
import { useCart } from "../../Contexts/data-context";

const CartItems = () => {
  const { cartItems } = useCart();
  console.log({ cartItems });
  return (
    <div className="cartItems">
      <CartHeader />
      {cartItems.map((item) => (
        <CartCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default CartItems;
