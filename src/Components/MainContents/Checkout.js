const Checkout = () => {
  return (
    <div className="checkout">
      <div class="card text">
        <h2>Price Details</h2>
        <div className="hr-line"></div>
        <div class="text-header">
          <span class="card-title">Price (1 Item)</span>
          <span>
            <i class="fas fa-rupee-sign"></i> 2,043
          </span>
        </div>
        <div className="hr-line"></div>
        <div class="text-header">
          <span class="card-title">Discount on MRP</span>
          <span className="text-color">
            <i class="fas fa-minus"></i>
            <i class="fas fa-rupee-sign"></i> 1,022
          </span>
        </div>
        <div className="hr-line"></div>
        <div class="text-header">
          <span class="card-title">Delivery Charges</span>
          <span>FREE</span>
        </div>
        <div className="hr-line"></div>
        <div className="text-header">
          <span className="card-title">
            <b>Total Amount</b>
          </span>
          <span className="total-amount">
            <b>
              <i class="fas fa-rupee-sign"></i> 1,021
            </b>
          </span>
        </div>
        <div className="hr-line"></div>
        <div class="btn-box">
          <button className="btn btn-primary">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
