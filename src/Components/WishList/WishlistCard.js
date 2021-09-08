import { Link } from "react-router-dom";
import { useData } from "../../Contexts/data-context";
import { useWishlist } from "../../hooks/useWishlist";
import { useCart } from "../../hooks/useCart";
import { priceCal, itemInBoth } from "../../Utils/utils";
import { useState } from "react";
import Spinner from "../Spinner";

const WishlistCard = ({ item }) => {
  const { cartItems } = useData();
  const { moveToCartFromWishlist } = useCart();
  const { handleRemoveWishItem } = useWishlist();
  const { _id: wishListItemId, product } = item;
  const { _id: productId, name, image, priceDetails, inStock } = product;
  const [moveToCartLoad, setMoveToCartLoad] = useState(false);
  const [wishActionLoad, setWishActionLoad] = useState(false);

  const cartProduct = itemInBoth(cartItems, item);

  return (
    <div className="card " id="card">
      <div className="thumbnail">
        <Link to={`/products/${productId}`}>
          <img src={image} alt="card" />
        </Link>
        <button
          className="close"
          onClick={() => handleRemoveWishItem(item, setWishActionLoad)}
        >
          {wishActionLoad ? (
            <Spinner type="ThreeDots" color=" #000" height={10} />
          ) : (
            <i className="fas fa-times fa-lg"></i>
          )}
        </button>
        {!inStock && (
          <div className="overlay">
            <span>OUT OF STOCK</span>
          </div>
        )}
      </div>
      <div className="text">
        <h3 className="heading">{name}</h3>
        <span className="price">
          <span className="product-price">
            <i className="fas fa-rupee-sign"></i> {priceCal(priceDetails)}
          </span>
          <span className="price-strike">
            <i className="fas fa-rupee-sign"></i> {priceDetails.originalPrice}
          </span>
          <span className="discount">({priceDetails.discount} % OFF)</span>
        </span>
      </div>
      <button
        className={`btn btn-primary ${
          inStock && !moveToCartLoad ? "" : "disabled"
        }`}
        disabled={!inStock ? true : false || moveToCartLoad ? true : false}
        onClick={() =>
          moveToCartFromWishlist(
            item,
            cartProduct,
            handleRemoveWishItem,
            setMoveToCartLoad,
            setWishActionLoad
          )
        }
      >
        {moveToCartLoad ? "Moving..." : "Move To Cart"}
      </button>
    </div>
  );
};

export default WishlistCard;
