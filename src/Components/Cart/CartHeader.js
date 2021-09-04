import { useData } from "../../Contexts/data-context";
import { totalItems, totalPrice } from "../../Utils/utils";

const CartHeader = () => {
  const { cartItems } = useData();
  return (
    <div className="side-bar-box">
      <span>
        <b>My Cart ({totalItems(cartItems)} Items</b>)
      </span>
      <span>
        <b>Total : Rs. {totalPrice(cartItems)}</b>
      </span>
    </div>
  );
};

export default CartHeader;
