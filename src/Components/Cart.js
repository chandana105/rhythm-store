import card from "../images/card.webp";
import Navbar from "./Nav";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div id="cart">
        <div className="content">
          <main>
            <div className="cartItems">
              <div className="side-bar-box">
                <span>My Cart (1 Item)</span>
                <span>Total Rs. 1,021</span>
              </div>
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
                    <button class="btn btn-primary">Primary</button>
                    <button class="btn btn-secondary">Secondary</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout">Bye</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Cart;

// contet auto row uske andar main ko krna center mein uske andar do divs flex row
