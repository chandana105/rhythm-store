export const generalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_CART_LOADER":
      return {
        ...state,
        showCartLoader: !state.showCartLoader,
      };
    case "FETCH_CART_DATA":
      return {
        ...state,
        cartItems: action.payload || [],
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems.concat({ ...action.payload }),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        ),
      };
    case "DECREMENT_QUANTITY":
      if (action.payload.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item !== action.payload),
        };
      }
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity - 1 }
            : { ...item }
        ),
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "FETCH_WISHLIST_DATA":
      return {
        ...state,
        wishList: action.payload || [],
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.concat({
          ...action.payload,
        }),
      };

    case "REMOVE_ITEM_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
