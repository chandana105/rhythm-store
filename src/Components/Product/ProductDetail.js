import Navbar from "../Nav";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import ErrorComponent from "../ErrorComponent";
import {
  priceCal,
  itemInWishList,
  isItemInCart,
  itemInBoth,
} from "../../Utils/utils";
import { useCart } from "../../Contexts/data-context";

const ProductDetail = () => {
  const { productId } = useParams();
  // console.log({productId})

  const { cartItems, wishList, cartDispatch } = useCart();

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState({ error: false });

  // usefect on depenc on prodcutid data item ki jgh
  // pehle render run hoa then usefect, toh item toh usefect se milegi tbhi vo render mein rerrro derha

  const getProductById = async () => {
    setLoading(true);
    try {
      setError({ error: false });
      const response = await axios.get(
        `https://rhythm-store-backend.chandana1.repl.co/products/${productId}`
      );
      console.log({ response });
      setData(response.data.product);
      setError({ error: false });
    } catch (err) {
      setError({ error: err });
      console.log(err);
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    data.length === 0 && getProductById();
  }, []);

  const item = data;
  // let item = data.find((item) => item._id === Number(productId));

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

  // const {
  //   _id: id,
  //   name,
  //   description,
  //   image,
  //   fastDelivery,
  //   priceDetails,
  //   highlights,
  //   ratings,
  //   inStock,
  // } = item;

  // console.log({ item });

  return (
    <>
      <div className="container product-detail" id="cart">
        <Navbar />
        <div className="content" id="product">
          <main>
            <div className="cartItems">
              {isLoading && <Spinner />}
              {isError.error !== false && <ErrorComponent error={isError} />}
              {data.length !== 0 && (
                <div className="card2 card-horizontal" key={data._id}>
                  <div className="thumbnail">
                    <img src={data.image} alt="horizontal-img" />
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
                    <span className="card-title">{data.name}</span>
                    <p>{data.description}</p>
                    <div className="rating">
                      <div className="star-rating high">
                        <span>{data.ratings}</span>
                        &nbsp;
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <div>
                      {" "}
                      Delivery :{" "}
                      <b>
                        {" "}
                        {data.fastDelivery
                          ? "Fast Delivery"
                          : "Within 3-5 Days"}
                      </b>
                    </div>
                    <div>
                      <b>Price : </b>
                      <b style={{ fontSize: "1.15rem" }}>
                        &#8377; {priceCal(data.priceDetails)}
                      </b>
                      <span className="price-strike">
                        &#8377; {data.priceDetails.originalPrice}
                      </span>
                      <span className="discount">
                        ({data.priceDetails.discount} % OFF)
                      </span>
                    </div>

                    <div className="highlights">
                      Highlights
                      <ul>
                        {data.highlights.map((list) => (
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
                            data.inStock
                              ? "btn btn-primary"
                              : "btn btn-primary disabled"
                          }
                          disabled={!data.inStock ? true : false}
                          onClick={() => {
                            cartDispatch({
                              type: "ADD_TO_CART",
                              payload: item,
                            });
                          }}
                        >
                          {data.inStock ? "Add To Cart" : "OUT OF STOCK"}
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
