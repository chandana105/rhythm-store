export const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "FETCH_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SHOW_LOADER":
      return {
        ...state,
        showLoader: !state.showLoader,
      };
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SORT_BY_CATEGORY":
      return {
        ...state,
        sortByCategory: action.payload,
      };
    case "TOGGLE_INVENTORY":
      return {
        ...state,
        showInventoryAll: !state.showInventoryAll,
      };
    case "TOGGLE_DELIVERY":
      return {
        ...state,
        showFastDelivery: !state.showFastDelivery,
      };
    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload,
      };
    case "SEARCH_BY_PRODUCT_TITLE":
      return {
        ...state,
        searchBy: action.payload,
      };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        searchBy: "",
        sortBy: "Price: Low to High",
        sortByCategory: "All",
        showInventoryAll: false,
        showFastDelivery: false,
        priceRange: 20000,
      };
    default:
      return state;
  }
};
