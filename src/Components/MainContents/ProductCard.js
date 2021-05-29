import { useCart } from "../../Contexts/cart-context";

const Card = ({ item }) => {
  const { cartItems, cartDispatch } = useCart();
  const {
    id,
    name,
    description,
    ratings,
    delivery,
    image,
    priceDetails,
    inStock,
  } = item;
  return (
    <div className="card" id="card">
      <div className="thumbnail">
        <img src={image} alt="card" />
        <button className="wish">
          <i className="far fa-heart fa-2x"></i>
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
          onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: {...item , qty : 1} })}
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
