import { Link } from "react-router-dom";
import wishlist from "../../assets/images/wishlist.svg";
import Navbar from "../Nav";

const EmptyWishlist = () => {
  return (
    <div className="container wish-container" id="empty-wishlist">
      <Navbar />
      <div className="content">
        <main>
          <div className="empty-wishlist-card">
            <h3>YOUR WISHLIST IS EMPTY</h3>
            <p>
              Add items that you like to your wishlist. Click 🤍 to save
              products.
            </p>
            <img src={wishlist} />
            <button className="btn btn-primary">
              <Link to="/product-listing">FIND ITEMS TO SAVE</Link>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmptyWishlist;
