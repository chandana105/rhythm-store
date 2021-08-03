import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../Reducers/productReducer";
const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
  const [{ products, showLoader, isError, sortBy, showInventoryAll ,showFastDelivery, priceRange , searchBy }, productDispatch] = useReducer(
    productReducer,
    {
      products : [],
      showLoader : false,
      isError : false,
      sortBy: "Price: Low to High",
      showInventoryAll : true,
      showFastDelivery : false,
      priceRange : 2050,
      searchBy : ''
    }
  );
  return (
    <StoreContext.Provider value={{ products , showLoader, isError, sortBy, showInventoryAll, showFastDelivery, priceRange , searchBy , productDispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

