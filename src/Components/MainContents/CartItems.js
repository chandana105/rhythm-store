import CartHeader from "./CartHeader";
import CartCard from "./CartCard";

const CartItems = () => {
  return (
    <div className="cartItems">
      <CartHeader />
      <CartCard />
      {/* <CartCard /> */}
    </div>
  );
};

export default CartItems;
