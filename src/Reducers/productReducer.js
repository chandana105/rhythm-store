
export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "TOGGLE_INVENTORY" :
        return {
            ...state,
            showInventoryAll : !state.showInventoryAll
        }
    case "TOGGLE_DELIVERY" :
      return {
        ...state ,
        showFastDelivery : !state.showFastDelivery
      }
    case "PRICE_RANGE" :
      return {
        ...state,
        priceRange : action.payload
      }
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sortBy: "Price: Low to High",
        showInventoryAll: false,
        showFastDelivery: false,
        priceRange : 2000

      };
    default:
      return state;
  }
};



