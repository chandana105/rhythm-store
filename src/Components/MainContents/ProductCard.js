import card from "../../images/card.webp";

const Card = () => {
  return (
    <div className="card" id="card">
      <div className="thumbnail">
        <img src={card} alt="card" />
        <span className="badge-regular bg-primary badge">NEW</span>
      </div>
      <div className="text">
        <button className="wish">
          <i className="far fa-heart fa-lg"></i>
        </button>
        <h2 className="heading">English Skirts</h2>
        <span className="lower">Women Slim Fit Formal Skirts</span>
        <div className="rating">
          <div className="star-rating high">
            <span>4.6</span>
            <i className="fas fa-star"></i>
          </div>
          <div className="discount">Fast Delivery</div>
        </div>
        <span className="price">
          <span className="product-price">
            <i className="fas fa-rupee-sign"></i> 479
          </span>
          <span className="price-strike">
            <i className="fas fa-rupee-sign"></i> 999
          </span>
          <span className="discount">(52% OFF)</span>
        </span>
      </div>

      <button className="btn btn-primary">Add To Cart</button>
    </div>
  );
};

export default Card;
