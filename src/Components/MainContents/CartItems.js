import CartHeader from "./CartHeader";
import CartCard from "./CartCard";
import { useCart } from "../../Contexts/cart-context";

const CartItems = () => {
  const { cartItems } = useCart();
  console.log({cartItems})
  return (
    <div className="cartItems">
      <CartHeader />
      {cartItems.map(
        (item) =>
          item.quantity !== 0  && (
            <CartCard item={item} key={item.id} />
          )
      )}
    
    </div>
  );
};

export default CartItems;


{/* <CartCard item={item} setShowModal={setShowModal} key={item.id} /> */}
