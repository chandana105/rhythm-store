import axios from "axios";
import { useData } from "../Contexts/data-context";
import { Toast } from "../Components/Toast";
import url from "../config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/auth-context";

export const useWishlist = () => {
  const { cartDispatch } = useData();
  const navigate = useNavigate();
  const { token } = useAuth();

  const addToWishlist = (item, setWishActionLoad) => {
    if (token) {
      handleAddToWishlist(item, setWishActionLoad);
    } else {
      navigate("/login");
    }
  };

  const handleAddToWishlist = async (product, setWishActionLoad) => {
    setWishActionLoad((prev) => !prev);
    try {
      const response = await axios.post(`${url}wishlist/userId`, {
        wishlistUpdate: {
          wishlist: [
            {
              product: product._id,
            },
          ],
        },
      });
      if (response.status === 200) {
        cartDispatch({
          type: "ADD_TO_WISHLIST",
          payload: { _id: product._id, product: product },
        });
        Toast("Added To Wishlist");
      }
    } catch (err) {
      console.log(err);
    }
    setWishActionLoad((prev) => !prev);
  };

  const handleRemoveWishItem = async (item, setWishActionLoad) => {
    setWishActionLoad((prev) => !prev);
    try {
      const response = await axios.delete(`${url}wishlist/userId/${item._id}`);
      if (response.status === 200) {
        cartDispatch({ type: "REMOVE_ITEM_FROM_WISHLIST", payload: item });
        Toast("Removed From Wishlist");
      }
    } catch (err) {
      console.log(err);
    }
    setWishActionLoad((prev) => !prev);
  };

  const moveToWishlistFromCart = async (
    item,
    wishProduct,
    removeItem,
    setWishActionLoad,
    setRemoveLoad
  ) => {
    setWishActionLoad((prev) => !prev);
    try {
      if (wishProduct === undefined) {
        const postedData = await axios.post(`${url}wishlist/userId`, {
          wishlistUpdate: {
            wishlist: [
              {
                product: item._id,
              },
            ],
          },
        });
        if (postedData.status === 200) {
          removeItem(item, setRemoveLoad);
          cartDispatch({
            type: "ADD_TO_WISHLIST",
            payload: { ...item, quantity: undefined },
          });
          Toast("Moved To Wishlist");
        }
      } else {
        Toast("Item already present in Wishlist");
      }
    } catch (err) {
      console.log(err);
    }
    setWishActionLoad((prev) => !prev);
  };

  return {
    addToWishlist,
    handleAddToWishlist,
    handleRemoveWishItem,
    moveToWishlistFromCart,
  };
};
