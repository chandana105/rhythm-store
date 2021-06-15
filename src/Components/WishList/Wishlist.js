import Navbar from "../Nav";
import WishlistCard from "./WishlistCard";
import WishlistHeader from "./WishlistHeader";
import { useCart} from '../../Contexts/data-context'

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
