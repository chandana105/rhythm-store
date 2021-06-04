export const cartReducer = (state, action) => {
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
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
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
          isWishListed: true,
          isAddedToCart: false,
        }),
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
      };
    case "REMOVE_ITEM_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

// return {
//   ...state,
//   // console.log(products.some((item) => item.id === wishItem.id)
//   cartItems : state.cartItems.some(item => item.id === action.payload.id),
//   cartItems: state.cartItems.filter((currentItems) =>
//     currentItems.id === action.payload.id
//       ? currentItems.map((item) => ({
//           ...item,
//           quantity: item.quantity + 1,
//         }))
//       : state.cartItems.concat({ ...action.payload })
//   ),
//   wishList: state.wishList.filter((item) => item.id !== action.payload.id),
// };

// case "MOVE_TO_CART":
// return {
//   ...state,
//   // console.log(products.some((item) => item.id === wishItem.id)
//   // cartItems : state.cartItems.some(item => item.id === action.payload.id),
//   cartItems: state.cartItems.some((item) =>
//     item.id === action.payload.id
//     ? { ...item, quantity: item.quantity + 1 }
//       : { ...item }
//   ),
//   wishList: state.wishList.filter(
//     (item) => item.id !== action.payload.id
//   ),
// };
// console.log(
//   state.cartItems.some((item) =>
//     item.id === action.payload.id
//       ? state.cartItems.map((item) => ({
//           ...item,
//           quantity: item.quantity + 1,
//         }))
//       : item
//   )
// );

// console.log(

// );
// const matched = state.cartItems.map((item) =>
//   item.id === action.payload.id
//     ? { ...item, quantity: item.quantity + 1 }
//     : { ...action.payload }
// );
//  if (matched) {
// console.log(matched);
//  }
// return {
//   ...state,
//   cartItems: state.cartItems.some((item) =>
//     item.id === action.payload.id
//       ?{ ...item, quantity: item.quantity + 1 }
//       : { item }
//   ),
//   wishList: state.wishList.filter(
//     (item) => item.id !== action.payload.id
//   ),
// };
