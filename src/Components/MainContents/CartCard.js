import { useCart } from "../../Contexts/cart-context";
const CartCard = ({ item }) => {
  const {cartItems, cartDispatch } = useCart();
  const {
    id,
    name,
    image,
    priceDetails,
    description,
    discountedPrice,
    quantity,
    isAddedToCart,
    isWishListed,
  } = item;

  
  return (
    <div className="card2 card-horizontal">
      <div className="thumbnail">
        <img src={image} alt="horizontal-img" />
      </div>
      <div className="text">
        <div className="text-header">
          <span className="card-title">{name}</span>
          <span>
            <b>
              <i className="fas fa-rupee-sign"></i>{" "}
              {discountedPrice}
            </b>
          </span>
        </div>
        <div className="text-header">
          <p>{description}</p>
          <div className="text-header-right">
            <span className="price-strike">
              <i className="fas fa-rupee-sign"></i> {priceDetails.originalPrice}
            </span>
            <span className="discount">({priceDetails.discount} OFF)</span>
          </div>
        </div>
        <div className="quantity">
          <span>Quantity : </span>
          <div className="quantity-buttons">
            <button
              className="floating"
              onClick={() =>
                cartDispatch({ type: "DECREMENT_QUANTITY", payload: item })
              }
            >
              <i className="fas fa-minus"></i>
            </button>
            <span>{quantity}</span>
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
                  isWishListed: true,
                  isAddedToCart: false,
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
      </div>
    </div>
  );
};

export default CartCard;
{/* <div className="product-quantity">
            <button
              className="btn btn-primary"
              onClick={() =>
                cartDispatch({ type: "DECREMENT_QUANTITY", payload: item })
              }
            >
              <i className="fas fa-minus fa-sm"></i>
            </button>
            <span>{quantity}</span>
            <button
              className="btn btn-primary"
              onClick={() =>
                cartDispatch({ type: "INCREMENT_QUANTITY", payload: item })
              }
            >
              <i className="fas fa-plus fa-sm"></i>
            </button>
          </div> */}