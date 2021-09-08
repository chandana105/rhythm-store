import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../Reducers/productReducer";
const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
  const [
    {
      categories,
      products,
      showLoader,
      sortBy,
      sortByCategory,
      showInventoryAll,
      showFastDelivery,
      priceRange,
      searchBy,
    },
    productDispatch,
  ] = useReducer(productReducer, {
    categories : [],
    products: [],
    showLoader: false,
    sortBy: "Price: Low to High",
    sortByCategory : "All",
    showInventoryAll: true,
    showFastDelivery: false,
    priceRange: 20000,
    searchBy: "",
  });
  return (
    <StoreContext.Provider
      value={{
        categories,
        products,
        showLoader,
        sortBy,
        sortByCategory,
        showInventoryAll,
        showFastDelivery,
        priceRange,
        searchBy,
        productDispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
