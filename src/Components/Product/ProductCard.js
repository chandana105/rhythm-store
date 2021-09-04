import { useData } from "../../Contexts/data-context";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  trimStr,
  itemInWishList,
  isItemInCart,
  itemInBoth,
} from "../../Utils/utils";
import { useWishlist } from "../../hooks/useWishlist";
import Spinner from "../Spinner";

const Card = ({ item }) => {
  const { cartItems, wishList } = useData();
  const { addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const { addToWishlist, handleRemoveWishItem } = useWishlist();

  const [addToCartLoad, setAddToCartLoad] = useState(false);
  const [incQtyLoad, setIncQtyLoad] = useState(false);
  const [decQtyLoad, setDecQtyLoad] = useState(false);
  const [removeLoad, setRemoveLoad] = useState(false);
  const [wishActionLoad, setWishActionLoad] = useState(false);

  const {
    _id: id,
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
      return addToWishlist(item, setWishActionLoad);
    }
    return handleRemoveWishItem(item, setWishActionLoad);
  };

  return (
    <div className="card" id="card">
      <div className="thumbnail">
        <Link to={`/products/${id}`}>
          <img src={image} alt="card" />
        </Link>
        <button
          className={`wish ${!wishActionLoad ? "" : "disabled"} `}
          disabled={wishActionLoad ? true : false}
          onClick={() => toggleWish(isInWishList)}
        >
          {isInWishList ? (
            wishActionLoad ? (
              <Spinner type="Oval" color="#a78bfa" height={20} />
            ) : (
              <i className="fas fa-heart fa-2x wishListed"></i>
            )
          ) : wishActionLoad ? (
            <Spinner type="Oval" color="#a78bfa" height={20} />
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
          <div className="discount">
            {fastDelivery ? "Fast Delivery" : "Within 3-5 Days"}
          </div>
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
            className={`btn btn-primary ${!decQtyLoad ? "" : "disabled"} || ${
              !removeLoad ? "" : "disabled"
            }`}
            disabled={decQtyLoad ? true : false || removeLoad ? true : false}
            onClick={() =>
              decreaseQuantity(cartProduct, setDecQtyLoad, setRemoveLoad)
            }
          >
            {removeLoad || decQtyLoad ? (
              <Spinner type="ThreeDots" color=" #fff" height={10} />
            ) : (
              <i className="fas fa-minus fa-sm"></i>
            )}
          </button>
          <span>{cartProduct.quantity}</span>
          <button
            className={`btn btn-primary ${!incQtyLoad ? "" : "disabled"}`}
            disabled={incQtyLoad ? true : false}
            onClick={() => increaseQuantity(cartProduct, setIncQtyLoad)}
          >
            {incQtyLoad ? (
              <Spinner type="ThreeDots" color=" #fff" height={10} />
            ) : (
              <i className="fas fa-plus fa-sm"></i>
            )}
          </button>
        </div>
      ) : (
        <button
          className={`btn btn-primary ${
            inStock && !addToCartLoad ? "" : "disabled"
          }`}
          disabled={!inStock ? true : false || addToCartLoad ? true : false}
          onClick={() => addToCart(item, setAddToCartLoad)}
        >
          {addToCartLoad ? "Adding..." : "Add To Cart"}
        </button>
      )}
    </div>
  );
};

export default Card;
