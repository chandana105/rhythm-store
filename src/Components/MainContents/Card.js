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
        <span className="price">
          <span className="product-price">Rs 479</span>
          <span className="price-strike">Rs 999</span>
          <span className="discount">(52% OFF)</span>
        </span>
      </div>
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  );
};

export default Card;
