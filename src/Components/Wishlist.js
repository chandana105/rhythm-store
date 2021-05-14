import Navbar from "../Components/Nav";
import WishlistCard from "./MainContents/WishlistCard";
import WishlistHeader from "./MainContents/WishlistHeader";

const Wishlist = () => {
  return (
    <div className="container" id="wishlist">
      <Navbar />
      <div className="content">
        <main>
          <WishlistHeader />
          <div className="wishlistItems">
            <WishlistCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wishlist;
