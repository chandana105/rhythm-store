import axios from "axios";
import { useData } from "../Contexts/data-context";
import { Toast } from "../Components/Toast";
import url from "../config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/auth-context";

export const useCart = () => {
  const { cartDispatch } = useData();
  const navigate = useNavigate();
  const { token } = useAuth();


  const addToCart = (item, setAddToCartLoad) => {
    if (token) {
      handleAddToCart(item, setAddToCartLoad);
    } else {
      navigate("/login");
    }
  };

  const handleAddToCart = async (product, setAddToCartLoad) => {
    setAddToCartLoad((prev) => !prev);
    try {
      const response = await axios.post(`${url}cart/userId`, {
        cartListUpdate: {
          cartList: [
            {
              product: product._id,
            },
          ],
        },
      });
      if (response.status === 200) {
        cartDispatch({
          type: "ADD_TO_CART",
          payload: { _id: product._id, product: product, quantity: 1 },
        });
        Toast("Added To Cart");
      }
    } catch (err) {
      console.log({ err });
    }
    setAddToCartLoad((prev) => !prev);
  };

  const increaseQuantity = async (cartProduct, setIncQtyLoad) => {
    const { quantity } = cartProduct;
    setIncQtyLoad((prev) => !prev);
    try {
      const response = await axios.post(
        `${url}cart/userId/${cartProduct._id}`,
        {
          quantity: quantity + 1,
        }
      );
      if (response.status === 200) {
        cartDispatch({ type: "INCREMENT_QUANTITY", payload: cartProduct });
        Toast("Added To Cart");
      }
    } catch (err) {
      console.log(err, "err");
    }
    setIncQtyLoad((prev) => !prev);
  };

  const decreaseQuantity = async (
    cartProduct,
    setDecQtyLoad,
    setRemoveLoad
  ) => {
    const { quantity } = cartProduct;
    if (quantity === 1) {
      return removeItem(cartProduct, setRemoveLoad);
    }
    setDecQtyLoad((prev) => !prev);

    try {
      const response = await axios.post(
        `${url}cart/userId/${cartProduct._id}`,
        {
          quantity: quantity - 1,
        }
      );
      if (response.status === 200) {
        cartDispatch({ type: "DECREMENT_QUANTITY", payload: cartProduct });
        Toast("CartItem quantity decresed");
      }
    } catch (err) {
      console.log(err, "err");
    }
    setDecQtyLoad((prev) => !prev);
  };

  const removeItem = async (item, setRemoveLoad) => {
    const { product } = item;
    setRemoveLoad((prev) => !prev);
    try {
      const response = await axios.delete(`${url}cart/userId/${product._id}`);
      if (response.status === 200) {
        cartDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item });
        Toast("Removed From Cart");
      }
    } catch (err) {
      console.log(err);
    }
    setRemoveLoad((prev) => !prev);
  };

  const moveToCartFromWishlist = async (
    item,
    cartProduct,
    handleRemoveWishItem,
    setMoveToCartLoad,
    setWishActionLoad
  ) => {
    setMoveToCartLoad((prev) => !prev);
    try {
      if (cartProduct === undefined) {
        const postedData = await axios.post(`${url}cart/userId`, {
          cartListUpdate: {
            cartList: [
              {
                product: item._id,
              },
            ],
          },
        });
        if (postedData.status === 200) {
          handleRemoveWishItem(item, setWishActionLoad);
          cartDispatch({
            type: "ADD_TO_CART",
            payload: { ...item, quantity: 1 },
          });
          Toast("Moved To Cart");
        }
      } else {
        const updatedData = await axios.post(
          `${url}cart/userId/${cartProduct._id}`,
          {
            quantity: cartProduct.quantity + 1,
          }
        );
        if (updatedData.status === 200) {
          handleRemoveWishItem(item, setWishActionLoad);
          cartDispatch({ type: "INCREMENT_QUANTITY", payload: cartProduct });
          Toast("Moved To Cart");
        }
      }
    } catch (err) {
      console.log(err);
    }
    setMoveToCartLoad((prev) => !prev);
  };

  return {
    addToCart,
    handleAddToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    moveToCartFromWishlist,
  };
};


