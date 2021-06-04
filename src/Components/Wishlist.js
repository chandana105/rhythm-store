import Navbar from "../Components/Nav";
import WishlistCard from "./MainContents/WishlistCard";
import WishlistHeader from "./MainContents/WishlistHeader";
import { useCart} from '../Contexts/cart-context'

const Wishlist = () => {
  const {wishList} = useCart();
  console.log({wishList})

  return (
    <div className="container" id="wishlist">
      <Navbar />
      <div className="content">
        <main>
          <WishlistHeader />
          <div className="wishlistItems">
            {wishList.map(item => <WishlistCard item={item} key=
            {item.id} /> )}
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wishlist;
