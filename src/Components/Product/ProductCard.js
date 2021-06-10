import { useCart } from "../../Contexts/cart-context";
import { Link } from "react-router-dom";
import {trimStr} from '../../Utils/utils'

const Card = ({ item }) => {
  const { cartItems, cartDispatch } = useCart();
  const {
    id,
    name,
    description,
    ratings,
    delivery,
    discountedPrice,
    image,
    priceDetails,
    isWishListed,
    inStock,
  } = item;

  const isItemInCart = (cartItems, productData) => {
    return cartItems.some((items) => items.id === productData.id);
  };

  const itemInCart = isItemInCart(cartItems, item);

  const itemInBoth = (cartItems, productData) => {
    return cartItems.find((items) => items.id === productData.id);
  };

  const cartProduct = itemInBoth(cartItems, item);

  return (
    <div className="card" id="card">
      <div className="thumbnail">
        <Link to={`/products/${id}`}>
          <img src={image} alt="card" />
        </Link>
        <button
          className="wish"
          onClick={() => {
            !isWishListed
              ? cartDispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: item,
                })
              : cartDispatch({
                  type: "REMOVE_ITEM_FROM_WISHLIST",
                  payload: item,
                });
          }}
        >
          {isWishListed ? (
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
          <div className="discount">{delivery}</div>
        </div>
        <span className="price">
          <span className="product-price">
            <i className="fas fa-rupee-sign"></i> {discountedPrice}
          </span>
          <span className="price-strike">
            &#8377; {priceDetails.originalPrice}
          </span>
          <span className="discount">({priceDetails.discount} OFF)</span>
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
      ) : inStock ? (
        <button
          className="btn btn-primary"
          onClick={() => {
            cartDispatch({
              type: "ADD_TO_CART",
              payload: { ...item, isAddedToCart: true },
            });
          }}
        >
          Add To Cart
        </button>
      ) : (
        <button className="btn btn-primary disabled" disabled>
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Card;
