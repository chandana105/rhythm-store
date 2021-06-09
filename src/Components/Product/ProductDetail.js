import Navbar from "../Nav";
import guitar from "../../assets/images/guitar.jpeg";
const ProductDetail = () => {
  return (
    <>
      <div className="container product-detail" id="cart">
        <Navbar />
        <div className="content" id="product">
          <main>
            <div className="cartItems">
              <div className="card2 card-horizontal">
                <div className="thumbnail">
                  <img src={guitar} alt="horizontal-img" />
                  <button
                    className="wish"
                    // onClick={() => {
                    //   !isWishListed
                    //     ? cartDispatch({
                    //         type: "ADD_TO_WISHLIST",
                    //         payload: item,
                    //       })
                    //     : cartDispatch({
                    //         type: "REMOVE_ITEM_FROM_WISHLIST",
                    //         payload: item,
                    //       });
                    // }}
                  >
                    <i className="far fa-heart fa-2x "></i>

                    {/* {isWishListed ? (
                      <i className="fas fa-heart fa-2x wishListed"></i>
                    ) : (
                      <i className="far fa-heart fa-2x "></i>
                    )} */}
                  </button>
                </div>
                <div className="text">
                  <span className="card-title">
                    Silver Enterprise Amazing Guitar
                  </span>
                  <p>`4-String 24'' Guitar For Kids, Brown`</p>
                  <div className="rating">
                    <div className="star-rating high">
                      <span>4.2</span>
                      &nbsp;
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div>
                    {" "}
                    Delivery Option : <b> FAST</b>
                  </div>
                  <div>
                    <b>Price : </b>
                    <b style={{ fontSize: "1.15rem" }}>&#8377; 312</b>
                    <span className="price-strike">&#8377; 999</span>
                    <span className="discount">(22% OFF)</span>
                  </div>

                  <div className="highlights">
                    Highlights
                    <ul>
                      <li>Material : Plastic</li>
                      <li>Non-battery Operated</li>
                      <li>Age : 1+ Years</li>
                    </ul>
                  </div>

                  <div className="btn-container-box">
                    <button
                      className="btn btn-primary"
                    //   onClick={() => {
                    //     cartDispatch({
                    //       type: "ADD_TO_CART",
                    //       payload: { ...item, isAddedToCart: true },
                    //     });
                    //   }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
