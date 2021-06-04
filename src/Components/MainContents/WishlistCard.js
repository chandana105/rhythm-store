import { useCart } from "../../Contexts/cart-context";

const WishlistCard = ({ item }) => {
  const { cartDispatch } = useCart();
  const {
    id,
    name,
    image,
    priceDetails,
    inStock,
    isAddedToCart,
    isWishListed,
    quantity,
  } = item;
  return (
    <div className="card " id="card">
      <div className="thumbnail">
        <img src={image} alt="card" />
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
            <i className="fas fa-rupee-sign"></i> {priceDetails.discountedPrice}
          </span>
          <span className="price-strike">
            <i className="fas fa-rupee-sign"></i> {priceDetails.originalPrice}
          </span>
          <span className="discount">({priceDetails.discount} OFF)</span>
        </span>
      </div>
      {inStock ? (
        <button
          className="btn btn-primary"
          onClick={() =>
            cartDispatch({
              type: "MOVE_TO_CART_FROM_WISHLIST",
              payload: {
                ...item,
                quantity: 1,
                isWishListed: false,
                isAddedToCart: true,
              },
            })
          }
        >
          Move To Cart
        </button>
      ) : (
        <button className="btn btn-primary disabled" disabled>
          Move To Cart
        </button>
      )}
    </div>
  );
};

export default WishlistCard;
