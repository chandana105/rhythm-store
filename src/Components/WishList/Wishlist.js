import Navbar from "../Nav";
import WishlistCard from "./WishlistCard";
import WishlistHeader from "./WishlistHeader";
import { useCart} from '../../Contexts/cart-context'

const Wishlist = () => {
  const {wishList} = useCart();

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
