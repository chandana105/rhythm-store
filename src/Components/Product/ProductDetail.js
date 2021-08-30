import Navbar from "../Nav";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import ErrorComponent from "../ErrorComponent";
import {
  priceCal,
  itemInWishList,
  isItemInCart,
  itemInBoth,
} from "../../Utils/utils";
import { useStore } from "../../Contexts/store-context";
import { useCart } from "../../Contexts/data-context";
import { useProductDetails } from "../../hooks/useProductDetails";
import url from "../../config";

const ProductDetail = () => {
  const { productId } = useParams();
  const { cartItems, wishList, cartDispatch } = useCart();
  const { showLoader, isError } = useStore();

  const product = useProductDetails("get", `${url}products/${productId}`);


  const item = product;

  const isInWishList = itemInWishList(wishList, item);

  const itemInCart = isItemInCart(cartItems, item);

  const cartProduct = itemInBoth(cartItems, item);

  const toggleWish = (isInWishList) => {
    if (!isInWishList) {
      return cartDispatch({
        type: "ADD_TO_WISHLIST",
        payload: item,
      });
    }
    return cartDispatch({
      type: "REMOVE_ITEM_FROM_WISHLIST",
      payload: item,
    });
  };

  return (
    <>
      <div className="container product-detail" id="cart">
        <Navbar />
        <div className="content" id="product">
          <main>
            <div className="cartItems">
              {showLoader && <Spinner type="Audio" color="#c4b5fd" height={60} />}
              {isError !== false && <ErrorComponent error={isError} />}

              {product.length !== 0 && (
                <div className="card2 card-horizontal" key={product._id}>
                  <div className="thumbnail">
                    <img src={product.image} alt="horizontal-img" />
                    <button
                      className="wish"
                      onClick={() => toggleWish(isInWishList)}
                    >
                      {isInWishList ? (
                        <i className="fas fa-heart fa-2x wishListed"></i>
                      ) : (
                        <i className="far fa-heart fa-2x "></i>
                      )}
                    </button>
                  </div>
                  <div className="text">
                    <span className="card-title">{product.name}</span>
                    <p>{product.description}</p>
                    <div className="rating">
                      <div className="star-rating high">
                        <span>{product.ratings}</span>
                        &nbsp;
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <div>
                      {" "}
                      Delivery :{" "}
                      <b>
                        {" "}
                        {product.fastDelivery
                          ? "Fast Delivery"
                          : "Within 3-5 Days"}
                      </b>
                    </div>
                    <div>
                      <b>Price : </b>
                      <b style={{ fontSize: "1.15rem" }}>
                        &#8377; {priceCal(product.priceDetails)}
                      </b>
                      <span className="price-strike">
                        &#8377; {product.priceDetails.originalPrice}
                      </span>
                      <span className="discount">
                        ({product.priceDetails.discount} % OFF)
                      </span>
                    </div>

                    <div className="highlights">
                      Highlights
                      <ul>
                        {product.highlights.map((list) => (
                          <li key={list.name}>{list}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="btn-container-box">
                      {itemInCart ? (
                        <div className="product-quantity">
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              cartDispatch({
                                type: "DECREMENT_QUANTITY",
                                payload: cartProduct,
                              })
                            }
                          >
                            <i className="fas fa-minus fa-sm"></i>
                          </button>
                          <span>{cartProduct.quantity}</span>
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              cartDispatch({
                                type: "INCREMENT_QUANTITY",
                                payload: cartProduct,
                              })
                            }
                          >
                            <i className="fas fa-plus fa-sm"></i>
                          </button>
                        </div>
                      ) : (
                        <button
                          className={
                            product.inStock
                              ? "btn btn-primary"
                              : "btn btn-primary disabled"
                          }
                          disabled={!product.inStock ? true : false}
                          onClick={() => {
                            cartDispatch({
                              type: "ADD_TO_CART",
                              payload: item,
                            });
                          }}
                        >
                          {product.inStock ? "Add To Cart" : "OUT OF STOCK"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;


