import { useContext, createContext, useReducer } from "react";
import { generalReducer } from "../Reducers/generalReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [{ cartItems, wishList }, cartDispatch] = useReducer(generalReducer, {
    cartItems: [],
    wishList: [],
  });
  return (
    <CartContext.Provider value={{ cartItems, wishList, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
