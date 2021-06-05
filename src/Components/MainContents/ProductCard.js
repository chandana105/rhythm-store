import { useCart } from "../../Contexts/cart-context";

const Card = ({ item }) => {
  const { wishList, cartDispatch } = useCart();
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
    isAddedToCart,
  } = item;

  return (
    <div className="card" id="card">
      <div className="thumbnail">
        <img src={image} alt="card" />
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
          <div className="overlay">
            <span>OUT OF STOCK</span>
          </div>
        )}
      </div>

      <div className="text">
        <h3 className="heading">{name}</h3>
        <span className="lower">{description}</span>
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
            <i className="fas fa-rupee-sign"></i> {priceDetails.originalPrice}
          </span>
          <span className="discount">({priceDetails.discount} OFF)</span>
        </span>
      </div>
      {/* here isaddedtocart tobe from cartiems arr */}
      {inStock && !isAddedToCart ? (
        <button
          className="btn btn-primary"
          onClick={() =>
            cartDispatch({
              type: "ADD_TO_CART",
              payload: { ...item, quantity: 1, isAddedToCart: true },
            })
          }
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
