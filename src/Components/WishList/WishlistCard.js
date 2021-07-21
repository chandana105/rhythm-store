import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/data-context";
import { priceCal } from "../../Utils/utils";

const WishlistCard = ({ item }) => {
  const { cartDispatch } = useCart();
  const { _id, name, image, priceDetails, inStock } = item;
  return (
    <div className="card " id="card">
      <div className="thumbnail">
        <Link to={`/products/${_id}`}>
          <img src={image} alt="card" />
        </Link>
        <button
          className="close"
          onClick={() =>
            cartDispatch({ type: "REMOVE_ITEM_FROM_WISHLIST", payload: item })
          }
        >
          <i className="fas fa-times fa-lg"></i>
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
        className={`btn btn-primary ${inStock ? "" : "disabled"}`}
        disabled={!inStock ? true : false}
        onClick={() => {
          cartDispatch({
            type: "MOVE_TO_CART_FROM_WISHLIST",
            payload: {
              ...item,
              quantity: 1,
            },
          });
        }}
      >
        Move To Cart
      </button>
    </div>
  );
};

export default WishlistCard;
