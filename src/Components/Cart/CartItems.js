import CartHeader from "./CartHeader";
import CartCard from "./CartCard";
import { useCart } from "../../Contexts/data-context";
// import { useEffect } from "react";

const CartItems = () => {
  const { cartItems } = useCart();
  // useEffect(() => {
  //   getCartData();
  // }, []);
  // console.log({ cartItems });
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
