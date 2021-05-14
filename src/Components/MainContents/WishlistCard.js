import card from "../../images/card.webp";

const WishlistCard = () => {
  return (
    <div className="card " id="card">
      <div className="thumbnail">
        <img src={card} alt="card" />
        <span className="badge-regular bg-primary badge">NEW</span>
        <button class="close">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div className="text">
        <button className="wish">
          <i className="far fa-heart fa-lg"></i>
        </button>
        <h2 className="heading">English Skirts</h2>
        <span className="price">
          <span className="product-price">
            <i class="fas fa-rupee-sign"></i> 479
          </span>
          <span className="price-strike">
            <i class="fas fa-rupee-sign"></i> 999
          </span>
          <span className="discount">(52% OFF)</span>
        </span>
      </div>

      <button className="btn btn-primary">Move To Cart</button>
    </div>
  );
};

export default WishlistCard;
