import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { generalReducer } from "../Reducers/generalReducer";
import url from "../config";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [{ cartItems, wishList }, cartDispatch] = useReducer(
    generalReducer,
    {
      cartItems: [],
      wishList: [],
    }
  );

  const getCartData = async () => {
    
    try {
      const response = await axios.get(`${url}cart/userId`);
      if (response.status === 200) {
        cartDispatch({
          type: "FETCH_CART_DATA",
          payload: response.data.cart.cartList,
        });
      }
    } catch (err) {
      console.log("Error while getting the cart data", err);
    }

  };

  const getWishData = async () => {
    
    try {
      const response = await axios.get(`${url}wishlist/userId`);
      if (response.status === 200) {
        cartDispatch({
          type: "FETCH_WISHLIST_DATA",
          payload: response.data.wishlist.wishlist,
        });
      }
    } catch (err) {
      console.log("Error while getting the wishList data", err);
    }
    
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishList,
        getCartData,
        getWishData,
        cartDispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useData = () => {
  return useContext(CartContext);
};
