// import { data } from "../Data";


// export const productReducer = (state, action) => {
//   switch (action.type) {
//     case "SORT":
//       return {
//         ...state,
//         sortBy: action.payload,
//       };
//     default:
//       return state;
//   }
// };



// const getSortedData = (productList, sortBy) => {
//   if (sortBy && sortBy === "Price: High to Low") {
//     return productList.sort(
//       (a, b) => b.priceDetails.discountedPrice - a.priceDetails.discountedPrice
//     );
//   } else if (sortBy && sortBy === "Price: Low to High") {
//     return productList.sort(
//       (a, b) => a.priceDetails.discountedPrice - b.priceDetails.discountedPrice
//     );
//   }
//   return productList;
// };

// const sortedData = getSortedData([...data], sortBy);

// const getFilteredData = (sortedData) => {
//   return sortedData;
// };

// export const filteredData = getFilteredData(sortedData);
