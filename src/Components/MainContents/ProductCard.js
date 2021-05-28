
const Card = ({item}) => {
  const {id , name , description, ratings, delivery, image , priceDetails}  = item
  return (
    <div className="card" id="card" >
      <div className="thumbnail">
        <img src={image} alt="card" />
        <button className="wish">
          <i className="far fa-heart fa-2x"></i>
        </button>
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

      <button className="btn btn-primary">Add To Cart</button>
    </div>
  );
};

export default Card;
