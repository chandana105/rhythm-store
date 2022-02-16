import { Link } from "react-router-dom";
import { useData } from "../../Contexts/data-context";
import { useCart } from "../../hooks/useCart";
import { priceCal } from "../../Utils/utils";
import { useState } from "react";
import { itemInBoth } from "../../Utils/utils";
import { useWishlist } from "../../hooks/useWishlist";
import Spinner from "../Spinner";

const CartCard = (item) => {
  const { _id: cartItemId, quantity, product } = item;
  const { _id: productId, name, image, priceDetails, description } = product;
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const { wishList } = useData();
  const { moveToWishlistFromCart } = useWishlist();

  const [incQtyLoad, setIncQtyLoad] = useState(false);
  const [decQtyLoad, setDecQtyLoad] = useState(false);
  const [removeLoad, setRemoveLoad] = useState(false);
  const [wishActionLoad, setWishActionLoad] = useState(false);

  const wishProduct = itemInBoth(wishList, item);

  return (
    <div className="card2 card-horizontal">
      <div className="thumbnail">
        <Link to={`/products/${productId}`}>
          <img src={image} alt="horizontal-img" />
        </Link>
      </div>
      <div className="text">
        <span className="card-title">{name}</span>
        <p>{description}</p>
        <div>
          <b>Price : </b>
          <b style={{ fontSize: "1.15rem" }}>
            &#8377; {priceCal(priceDetails)}
          </b>
          <span className="price-strike">
            &#8377; {priceDetails.originalPrice}
          </span>
          <span className="discount">({priceDetails.discount} % OFF)</span>
        </div>

        <div className="quantity">
          <b>Quantity : </b>
          <div className="quantity-buttons">
            <button
              className={`floating ${!decQtyLoad ? "" : "disabled"} || ${
                !removeLoad ? "" : "disabled"
              }`}
              disabled={decQtyLoad ? true : false || removeLoad ? true : false}
              onClick={() =>
                decreaseQuantity(item, setDecQtyLoad, setRemoveLoad)
              }
            >
              {removeLoad || decQtyLoad ? (
                <Spinner type="Oval" color="#4c1d95" height={20}  />
              ) : (
                <i className="fas fa-minus"></i>
              )}
            </button>
            <b>{quantity}</b>
            <button
              className={`floating ${!incQtyLoad ? "" : "disabled"}`}
              disabled={incQtyLoad ? true : false}
              onClick={() => increaseQuantity(item, setIncQtyLoad)}
            >
              {incQtyLoad ? (
                <Spinner type="Oval" color="#4c1d95" height={20} />
              ) : (
                <i className="fas fa-plus"></i>
              )}
            </button>
          </div>
        </div>
        <div className="btn-container-box">
          <button
            className={`btn btn-primary ${!wishActionLoad ? "" : "disabled"}`}
            disabled={wishActionLoad ? true : false}
            onClick={() =>
              moveToWishlistFromCart(
                item,
                wishProduct,
                removeItem,
                setWishActionLoad,
                setRemoveLoad
              )
            }
          >
            {wishActionLoad ? "MOVING..." : "MOVE TO WISHLIST"}
          </button>
          <button
            className={`btn btn-secondary ${!removeLoad ? "" : "disabled"}`}
            disabled={removeLoad ? true : false}
            onClick={() => removeItem(item, setRemoveLoad)}
          >
            {removeLoad ? "REMOVING..." : "REMOVE"}
          </button>
        </div>
        <div className="subtotal">
          SubTotal : &nbsp;
          <b>
            <i className="fas fa-rupee-sign"></i>{" "}
            {priceCal(priceDetails) * quantity}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
