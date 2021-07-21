import { useCart } from "../../Contexts/data-context";
import { Link } from "react-router-dom";
import {
  trimStr,
  itemInWishList,
  isItemInCart,
  itemInBoth,
} from "../../Utils/utils";

const Card = ({ item }) => {
  const { cartItems, wishList, cartDispatch } = useCart();
  const {
    _id : id,
    name,
    description,
    ratings,
    fastDelivery,
    discountedPrice,
    image,
    priceDetails,
    inStock,
  } = item;

  const itemInCart = isItemInCart(cartItems, item);

  const cartProduct = itemInBoth(cartItems, item);

  const isInWishList = itemInWishList(wishList, item);

  const toggleWish = (isInWishList) => {
    if (!isInWishList) {
      return cartDispatch({
        type: "ADD_TO_WISHLIST",
        payload: item,
      });
    }
    return cartDispatch({
      type: "REMOVE_ITEM_FROM_WISHLIST",
      payload: item,
    });
  };

  return (
    <div className="card" id="card">
      <div className="thumbnail">
        <Link to={`/products/${id}`}>
          <img src={image} alt="card" />
        </Link>
        <button className="wish" onClick={() => toggleWish(isInWishList)}>
          {isInWishList ? (
            <i className="fas fa-heart fa-2x wishListed"></i>
          ) : (
            <i className="far fa-heart fa-2x "></i>
          )}
        </button>

        {!inStock && (
          <Link to={`/products/${id}`}>
            <div className="overlay">
              <span>OUT OF STOCK</span>
            </div>
          </Link>
        )}
      </div>

      <div className="text">
        <h3 className="heading">{name}</h3>
        <span className="lower">{trimStr(description)}</span>
        <div className="rating">
          <div className="star-rating high">
            <span>{ratings}</span>
            &nbsp;
            <i className="fas fa-star"></i>
          </div>
          <div className="discount">{fastDelivery ? 'Fast Delivery' : 'Within 3-5 Days'}</div>
        </div>
        <span className="price">
          <span className="product-price">
            <i className="fas fa-rupee-sign"></i> {discountedPrice}
          </span>
          <span className="price-strike">
            &#8377; {priceDetails.originalPrice}
          </span>
          <span className="discount">({priceDetails.discount} % OFF)</span>
        </span>
      </div>

      {itemInCart ? (
        <div className="product-quantity">
          <button
            className="btn btn-primary"
            onClick={() =>
              cartDispatch({ type: "DECREMENT_QUANTITY", payload: cartProduct })
            }
          >
            <i className="fas fa-minus fa-sm"></i>
          </button>
          <span>{cartProduct.quantity}</span>
          <button
            className="btn btn-primary"
            onClick={() =>
              cartDispatch({ type: "INCREMENT_QUANTITY", payload: cartProduct })
            }
          >
            <i className="fas fa-plus fa-sm"></i>
          </button>
        </div>
      ) : (
        <button
          className={`btn btn-primary ${inStock ? "" : "disabled"}`}
          disabled={!inStock ? true : false}
          onClick={() => {
            cartDispatch({
              type: "ADD_TO_CART",
              payload: item,
            });
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Card;
