// import {useCart} from '../../Contexts/cart-context'

const CartCard = ({item}) => {
  // const { = useCart();
  // console.log(cartItems)
  const {id ,name , image, priceDetails , description , qty  } = item
    return (
    <div className="card2 card-horizontal" >
      <div className="thumbnail">
        <img src={image} alt="horizontal-img" />
      </div>
      <div className="text">
        <div className="text-header">
          <span className="card-title">{name}</span>
          <span>
            <b>
              <i className="fas fa-rupee-sign"></i> {priceDetails.discountedPrice}
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
            <button className="floating">
              <i className="fas fa-minus"></i>
            </button>
            <span>{qty}</span>
            <button className="floating">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="btn-container-box">
          <button className="btn btn-primary">MOVE TO WISHLIST</button>
          <button className="btn btn-secondary">REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
