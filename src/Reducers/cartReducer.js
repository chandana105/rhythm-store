export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems.concat({ ...action.payload }),
        productData: state.productData.map((item) =>
          item.id === action.payload.id
            ? { ...item, isAddedToCart: true }
            : item
        ),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        ),
        productData: state.productData.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        ),
      };
    case "DECREMENT_QUANTITY":
      if (action.payload.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item !== action.payload),
          productData: state.productData.map((item) =>
          item.id === action.payload.id
            ? { ...item, isAddedToCart: false, quantity: 1 }
            : item
        ),
        }
      }
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : { ...item }
        ),
        productData: state.productData.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : { ...item }
        ),
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item !== action.payload),
        productData: state.productData.map((item) =>
          item.id === action.payload.id
            ? { ...item, isAddedToCart: false, quantity: 1 }
            : item
        ),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.concat({
          ...action.payload,
          quantity: 0,
          isWishListed: true,
          isAddedToCart: false,
        }),
        productData: state.productData.map((item) =>
          item.id === action.payload.id ? { ...item, isWishListed: true } : item
        ),
      };

    case "MOVE_TO_WISHLIST_FROM_CART":
      const isSameItem = state.wishList.some(
        (item) => item.id === action.payload.id
      );
      const getItemsInWishList = () => {
        if (isSameItem) return state.wishList.map((item) => item);
        return state.wishList.concat({
          ...action.payload,
        });
      };

      const getInCart = () => {
        if (isSameItem) return state.cartItems.map((item) => item);
        return state.cartItems.filter((item) => item.id !== action.payload.id);
      };

      return {
        ...state,
        cartItems: getInCart(),
        wishList: getItemsInWishList(),
        productData: state.productData.map((item) =>
          item.id === action.payload.id ? { ...item, isWishListed: true } : item
        ),
      };

    case "MOVE_TO_CART_FROM_WISHLIST":
      const isSameItemMatched = state.cartItems.some(
        (item) => item.id === action.payload.id
      );
      const getItemsInCart = () => {
        if (isSameItemMatched) {
          return state.cartItems.map((item) =>
            item.id === action.payload.id
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
          (item) => item.id !== action.payload.id
        ),
        productData: state.productData.map((item) =>
          item.id === action.payload.id
            ? { ...item, isWishListed: false, isAddedToCart: true , quantity : 1 }
            : item
        ),
      };

    case "REMOVE_ITEM_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.id !== action.payload.id
        ),
        productData: state.productData.map((item) =>
          item.id === action.payload.id
            ? { ...item, isWishListed: false }
            : item
        ),
      };

    default:
      return state;
  }
};
