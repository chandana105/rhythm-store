import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { generalReducer } from "../Reducers/generalReducer";
import  url from '../config'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [{ cartItems, wishList }, cartDispatch] = useReducer(generalReducer, {
    cartItems: [],
    wishList: [],
  });

  //   const getCartData =  async() => {
  //   try {
  //     const response = await axios.get(`${url}cart`)
  //     // if (response.status === 200) {
  //       return cartDispatch({
  //         type : "FETCH_CART_DATA",
  //         payload : response.data.cart
  //       })
  //     // }
  //     // console.log(response.data.cart)
  //   } catch ( err) {
  //     console.log('err' , err)
  //   }
  // }



  return (
    <CartContext.Provider value={{ cartItems, wishList ,cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
