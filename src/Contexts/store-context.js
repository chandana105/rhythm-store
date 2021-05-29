import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../Reducers/productReducer";
const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
  const [{ sortBy, showInventoryAll ,showFastDelivery, priceRange }, productDispatch] = useReducer(
    productReducer,
    {
      sortBy: "Price: Low to High",
      showInventoryAll : true,
      showFastDelivery : false,
      priceRange : 2000
    }
  );
  return (
    <StoreContext.Provider value={{ sortBy, showInventoryAll, showFastDelivery, priceRange , productDispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
