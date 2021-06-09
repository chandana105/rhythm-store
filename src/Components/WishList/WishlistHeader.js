 import {useCart} from '../../Contexts/cart-context'

const WishlistHeader = () => {
  const { wishList } = useCart();
    return (
      <div className="wishHeader">
        <span>My Wishlist - <span><b>{wishList.length} Items</b></span></span>
      </div>
    );
  };
  
  export default WishlistHeader;
  