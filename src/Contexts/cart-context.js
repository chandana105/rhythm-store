import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../Reducers/cartReducer";
import { data } from "../Data";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [{ cartItems, wishList, productData, toastValue }, cartDispatch] =
    useReducer(cartReducer, {
      cartItems: [],
      wishList: [],
      productData: data,
      toastValue: "",
    });
  return (
    <CartContext.Provider
      value={{ cartItems, wishList, productData, toastValue, cartDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
