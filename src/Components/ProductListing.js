import React, { useReducer } from "react";
// import { productReducer, filteredData } from "../Reducers/productReducer";

import Navbar from "./Nav";
import Sidebar from "./Sidebar";
import Main from "./Main";
import {data} from '../Data'

 const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};


export default function ProductListing() {
  const [{ sortBy }, productDispatch] = useReducer(productReducer, {
    sortBy: "Price: High to Low",
  });

  const getSortedData = (productList, sortBy) => {
    if (sortBy && sortBy === "Price: High to Low") {
      return productList.sort(
        (a, b) =>
          b.priceDetails.discountedPrice - a.priceDetails.discountedPrice
      );
    } else if (sortBy && sortBy === "Price: Low to High") {
      return productList.sort(
        (a, b) =>
          a.priceDetails.discountedPrice - b.priceDetails.discountedPrice
      );
    }
    return productList;
  };

  const sortedData = getSortedData([...data], sortBy);

  const getFilteredData = (sortedData) => {
    return sortedData;
  };

  const filteredData = getFilteredData(sortedData);

  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Main
        sortBy={sortBy}
        productDispatch={productDispatch}
        filteredData={filteredData}
      />
    </div>
  );
}
