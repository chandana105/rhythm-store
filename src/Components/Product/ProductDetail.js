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
import { useData } from "../../Contexts/data-context";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { useProductDetails } from "../../hooks/useProductDetails";
import url from "../../config";
import { useState } from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const { cartItems, wishList } = useData();
  const { showLoader, isError } = useStore();
  const { addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const { addToWishlist, handleRemoveWishItem } = useWishlist();

  const [addToCartLoad, setAddToCartLoad] = useState(false);
  const [incQtyLoad, setIncQtyLoad] = useState(false);
  const [decQtyLoad, setDecQtyLoad] = useState(false);
  const [removeLoad, setRemoveLoad] = useState(false);
  const [wishActionLoad, setWishActionLoad] = useState(false);

  const product = useProductDetails("get", `${url}products/${productId}`);

  const item = product;

  const isInWishList = itemInWishList(wishList, item);

  const itemInCart = isItemInCart(cartItems, item);

  const cartProduct = itemInBoth(cartItems, item);

  const toggleWish = (isInWishList) => {
    if (!isInWishList) {
      return addToWishlist(item, setWishActionLoad);
    }
    return handleRemoveWishItem(item, setWishActionLoad);
  };

  const getButtonStatus = (inStock) => {
    if (!inStock && !addToCartLoad) {
      return "OUT OF STOCK";
    } else {
      return "ADD TO CART";
    }
  };

  return (
    <>
      <div className="container product-detail" id="cart">
        <Navbar />
        <div className="content" id="product">
          <main>
            <div className="cartItems">
              {showLoader && (
                <Spinner type="Audio" color="#c4b5fd" height={60} />
              )}
              {isError !== false && <ErrorComponent error={isError} />}

              {product.length !== 0 && (
                <div className="card2 card-horizontal" key={product._id}>
                  <div className="thumbnail">
                    <img src={product.image} alt="horizontal-img" />
                    <button
                      className={`wish ${!wishActionLoad ? "" : "disabled"} `}
                      disabled={wishActionLoad ? true : false}
                      onClick={() => toggleWish(isInWishList)}
                    >
                      {isInWishList ? (
                        wishActionLoad ? (
                          <Spinner type="Oval" color="#a78bfa" height={20} />
                        ) : (
                          <i className="fas fa-heart fa-2x wishListed"></i>
                        )
                      ) : wishActionLoad ? (
                        <Spinner type="Oval" color="#a78bfa" height={20} />
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
                            className={`btn btn-primary ${
                              !decQtyLoad ? "" : "disabled"
                            } || ${!removeLoad ? "" : "disabled"}`}
                            disabled={
                              decQtyLoad
                                ? true
                                : false || removeLoad
                                ? true
                                : false
                            }
                            onClick={() =>
                              decreaseQuantity(
                                cartProduct,
                                setDecQtyLoad,
                                setRemoveLoad
                              )
                            }
                          >
                            {removeLoad || decQtyLoad ? (
                              <Spinner
                                type="ThreeDots"
                                color=" #fff"
                                height={10}
                              />
                            ) : (
                              <i className="fas fa-minus fa-sm"></i>
                            )}
                          </button>
                          <span>{cartProduct.quantity}</span>
                          <button
                            className={`btn btn-primary ${
                              !incQtyLoad ? "" : "disabled"
                            }`}
                            disabled={incQtyLoad ? true : false}
                            onClick={() =>
                              increaseQuantity(cartProduct, setIncQtyLoad)
                            }
                          >
                            {incQtyLoad ? (
                              <Spinner
                                type="ThreeDots"
                                color=" #fff"
                                height={10}
                              />
                            ) : (
                              <i className="fas fa-plus fa-sm"></i>
                            )}
                          </button>
                        </div>
                      ) : (
                        <button
                          className={
                            product.inStock && !addToCartLoad
                              ? "btn btn-primary"
                              : "btn btn-primary disabled"
                          }
                          disabled={
                            !product.inStock
                              ? true
                              : false || addToCartLoad
                              ? true
                              : false
                          }
                          onClick={() => addToCart(item, setAddToCartLoad)}
                        >
                          {addToCartLoad
                            ? "Adding..."
                            : getButtonStatus(product.inStock)}
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
