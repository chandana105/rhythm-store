import Navbar from "../Nav";
import { useParams } from "react-router-dom";
import { data } from "../../Data";
import { priceCal } from "../../Utils/utils";
import { useCart } from "../../Contexts/cart-context";

const ProductDetail = () => {
  const { productId } = useParams();
  // console.log({ productId });

  const { cartItems, wishList, cartDispatch } = useCart();
  let item = data.find((item) => item.id === Number(productId));

  const itemInWishList = (wishList, product) => {
    return wishList.some((items) => items.id === product.id);
  };

  const isInWishList = itemInWishList(wishList, item);

  const isItemInCart = (cartItems, productData) => {
    return cartItems.some((items) => items.id === productData.id);
  };

  const itemInCart = isItemInCart(cartItems, item);

  const itemInBoth = (cartItems, productData) => {
    return cartItems.find((items) => items.id === productData.id);
  };

  const cartProduct = itemInBoth(cartItems, item);

  const {
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
              <div className="card2 card-horizontal">
                <div className="thumbnail">
                  <img src={image} alt="horizontal-img" />
                  <button
                    className="wish"
                    onClick={() => {
                      !isInWishList
                        ? cartDispatch({
                            type: "ADD_TO_WISHLIST",
                            payload: item,
                          })
                        : cartDispatch({
                            type: "REMOVE_ITEM_FROM_WISHLIST",
                            payload: item,
                          });
                    }}
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
                    ) : inStock ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          cartDispatch({
                            type: "ADD_TO_CART",
                            payload: { ...item, isAddedToCart: true },
                          });
                        }}
                      >
                        Add To Cart
                      </button>
                    ) : (
                      <button className="btn btn-primary disabled" disabled>
                        Out Of Stock
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
