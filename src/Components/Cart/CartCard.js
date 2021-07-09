import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/data-context";
import { priceCal } from "../../Utils/utils";

const CartCard = ({ item }) => {
  const { cartDispatch } = useCart();
  const { id, name, image, priceDetails, description, quantity } = item;

  return (
    <div className="card2 card-horizontal">
      <div className="thumbnail">
        <Link to={`/products/${id}`}>
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
              className="floating"
              onClick={() =>
                cartDispatch({ type: "DECREMENT_QUANTITY", payload: item })
              }
            >
              <i className="fas fa-minus"></i>
            </button>
            <b>{quantity}</b>
            <button
              className="floating"
              onClick={() =>
                cartDispatch({ type: "INCREMENT_QUANTITY", payload: item })
              }
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="btn-container-box">
          <button
            className="btn btn-primary"
            onClick={() =>
              cartDispatch({
                type: "MOVE_TO_WISHLIST_FROM_CART",
                payload: {
                  ...item,
                  quantity: 0,
                },
              })
            }
          >
            MOVE TO WISHLIST
          </button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              cartDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item })
            }
          >
            REMOVE
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
