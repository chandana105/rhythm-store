import Navbar from "../Nav";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useStore } from "../../Contexts/store-context";
import { priceCal } from "../../Utils/utils";
import { useProduct } from "../../hooks/useProduct";
import url from "../../config";

export default function ProductListing() {
  const {
    products,
    sortBy,
    showInventoryAll,
    showFastDelivery,
    priceRange,
    searchBy,
  } = useStore();

  useProduct("get", `${url}products`);

  const getSortedData = (productList, sortBy) => {
    const newProductList = productList.map((item) => ({
      ...item,
      discountedPrice: priceCal(item.priceDetails),
    }));

    if (sortBy && sortBy === "Price: High to Low") {
      return newProductList.sort(
        (a, b) => b.discountedPrice - a.discountedPrice
      );
    } else if (sortBy && sortBy === "Price: Low to High") {
      return newProductList.sort(
        (a, b) => a.discountedPrice - b.discountedPrice
      );
    }
    return newProductList;
  };

  const sortedData = getSortedData(products, sortBy);

  const getFilteredData = (
    sortedData,
    { showInventoryAll, showFastDelivery, priceRange, searchBy }
  ) => {
    return sortedData
      .filter(({ inStock }) => (showInventoryAll ? true : inStock))
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))
      .filter(
        ({ discountedPrice }) =>
          discountedPrice > 0 && discountedPrice <= priceRange
      )
      .filter(({ name }) =>
        name.toLowerCase().includes(searchBy.toLowerCase())
      );
  };

  const filteredData = getFilteredData(sortedData, {
    showInventoryAll,
    showFastDelivery,
    priceRange,
    searchBy,
  });

  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Main filteredData={filteredData} />
    </div>
  );
}

// 2. is getitng prodcuts from usestore and apssing to sorteddata variable
