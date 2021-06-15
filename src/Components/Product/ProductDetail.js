import Navbar from "../Nav";
import { useParams } from "react-router-dom";
import { data } from "../../Data";
import {
  priceCal,
  itemInWishList,
  isItemInCart,
  itemInBoth,
} from "../../Utils/utils";
import { useCart } from "../../Contexts/data-context";

const ProductDetail = () => {
  const { productId } = useParams();

  const { cartItems, wishList, cartDispatch } = useCart();

  let item = data.find((item) => item.id === Number(productId));

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

  const {
    id,
    name,
    description,
    image,
    delivery,
    priceDetails,
    highlights,
    ratings,
    inStock,
  } = item;

  return (
    <>
      <div className="container product-detail" id="cart">
        <Navbar />
        <div className="content" id="product">
          <main>
            <div className="cartItems">
              <div className="card2 card-horizontal" key={id}>
                <div className="thumbnail">
                  <img src={image} alt="horizontal-img" />
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
                  <span className="card-title">{name}</span>
                  <p>{description}</p>
                  <div className="rating">
                    <div className="star-rating high">
                      <span>{ratings}</span>
                      &nbsp;
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div>
                    {" "}
                    Delivery : <b> {delivery}</b>
                  </div>
                  <div>
                    <b>Price : </b>
                    <b style={{ fontSize: "1.15rem" }}>
                      &#8377; {priceCal(priceDetails)}
                    </b>
                    <span className="price-strike">
                      &#8377; {priceDetails.originalPrice}
                    </span>
                    <span className="discount">
                      ({priceDetails.discount} OFF)
                    </span>
                  </div>

                  <div className="highlights">
                    Highlights
                    <ul>
                      {highlights.map((list) => (
                        <li>{list}</li>
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
                          inStock
                            ? "btn btn-primary"
                            : "btn btn-primary disabled"
                        }
                        disabled={!inStock ? true : false}
                        onClick={() => {
                          cartDispatch({
                            type: "ADD_TO_CART",
                            payload: item,
                          });
                        }}
                      >
                        {inStock ? "Add To Cart" : "OUT OF STOCK"}
                      </button>
                    )}
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
