import { useCart } from "../../Contexts/cart-context";
import {
  totalOriginalPrice,
  totalItems,
  totalDiscountOnOriginalPrice,
  finalAmountToBePaid,
} from "../../Utils/utils";

const Checkout = () => {
  const { cartItems } = useCart();
  return (
    <div className="checkout">
      <div className="card text">
        <h2>Price Details</h2>
        <div className="hr-line"></div>
        <div className="text-header">
          <span className="card-title">
            Price ({totalItems(cartItems)} Items)
          </span>
          <span>
            <i className="fas fa-rupee-sign"></i>{" "}
            {totalOriginalPrice(cartItems)}
          </span>
        </div>
        <div className="hr-line"></div>
        <div className="text-header">
          <span className="card-title">Discount on MRP</span>
          <span className="text-color">
            <i className="fas fa-minus"></i>
            <i className="fas fa-rupee-sign"></i>{" "}
            {totalDiscountOnOriginalPrice(cartItems)}
          </span>
        </div>
        <div className="hr-line"></div>
        <div className="text-header">
          <span className="card-title">Delivery Charges</span>
          <span>FREE</span>
        </div>
        <div className="hr-line"></div>
        <div className="text-header">
          <span className="card-title">
            <b>Total Amount</b>
          </span>
          <span className="total-amount">
            <b>
              <i className="fas fa-rupee-sign"></i>{" "}
              {finalAmountToBePaid(cartItems)}
            </b>
          </span>
        </div>
        <div className="hr-line"></div>
        <div className="btn-box">
          <button className="btn btn-primary">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
