export const generalReducer = (state, action) => {
  switch (action.type) {
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
        cartItems: state.cartItems.filter((item) => item !== action.payload),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.concat({
          ...action.payload,
          quantity: 0,
        }),
      };

    case "MOVE_TO_WISHLIST_FROM_CART":
      const isSameItem = state.wishList.some(
        (item) => item._id === action.payload._id
      );
      const getItemsInWishList = () => {
        if (isSameItem) return state.wishList.map((item) => item);
        return state.wishList.concat({
          ...action.payload,
        });
      };

      const getInCart = () => {
        if (isSameItem) return state.cartItems.map((item) => item);
        return state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      };

      return {
        ...state,
        cartItems: getInCart(),
        wishList: getItemsInWishList(),
      };

    case "MOVE_TO_CART_FROM_WISHLIST":
      const isSameItemMatched = state.cartItems.some(
        (item) => item._id === action.payload._id
      );
      const getItemsInCart = () => {
        if (isSameItemMatched) {
          return state.cartItems.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item }
          );
        }
        return state.cartItems.concat({ ...action.payload });
      };

      return {
        ...state,
        cartItems: getItemsInCart(),
        wishList: state.wishList.filter(
          (item) => item._id !== action.payload._id
        ),
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
