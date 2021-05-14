import card from "../../images/card.webp";

const CartCard = () => {
  return (
    <div className="card2 card-horizontal">
      <div className="thumbnail">
        <img src={card} alt="horizontal-img" />
      </div>
      <div className="text">
        <div className="text-header">
          <span className="card-title">English Skirts</span>
          <span>
            <b>
              <i class="fas fa-rupee-sign"></i> 1,021
            </b>
          </span>
        </div>
        <div className="text-header">
          <p>Women Slim Fit Formal Skirts</p>
          <div className="text-header-right">
            <span className="price-strike">
              <i className="fas fa-rupee-sign"></i> 2043
            </span>
            <span className="discount">(50% OFF)</span>
          </div>
        </div>
        <div className="quantity">
          <span>Quantity : </span>
          <div className="quantity-buttons">
            <button class="floating">
              <i class="fas fa-minus"></i>
            </button>
            <span>1</span>
            <button class="floating">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="btn-container-box">
          <button class="btn btn-primary">MOVE TO WISHLIST</button>
          <button class="btn btn-secondary">REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
