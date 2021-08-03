import { Link } from "react-router-dom";
import cart from "../../assets/images/cart.svg";
import Navbar from "../Nav";

const EmptyCart = () => {
  return (
    <div className="container wish-container" id="empty-wishlist">
      <Navbar />
      <div className="content">
        <main>
          <div className="empty-wishlist-card">
            <h3>YOUR CART IS EMPTY</h3>
            <p>Add items to your cart now.</p>
            <img src={cart} alt="cart"/>
            <button className="btn btn-primary">
              <Link to="/products">SHOP NOW</Link>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmptyCart;
