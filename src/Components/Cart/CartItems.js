import CartHeader from "./CartHeader";
import CartCard from "./CartCard";
import { useData } from "../../Contexts/data-context";

const CartItems = () => {
  const { cartItems } = useData();
  return (
    <div className="cartItems">
      <CartHeader />
      {cartItems.map((item) => (
        <CartCard {...item} key={item._id} />
      ))}
    </div>
  );
};

export default CartItems;
