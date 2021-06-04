import Navbar from "./Nav";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { data } from "../Data";
import { useStore } from "../Contexts/store-context";
import { priceCal } from "../Utils/utils";

export default function ProductListing() {
  const { sortBy, showInventoryAll, showFastDelivery, priceRange } = useStore();

  const getSortedData = (productList, sortBy) => {
    const newProductList = productList.map((item) => ({
      ...item,
      discountedPrice: priceCal(item.priceDetails),
    }));

    if (sortBy && sortBy === "Price: High to Low") {
      return newProductList.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else if (sortBy && sortBy === "Price: Low to High") {
      return newProductList.sort((a, b) => a.discountedPrice - b.discountedPrice);
    }
    return newProductList;
  };

  const sortedData = getSortedData(data, sortBy);

  const getFilteredData = (
    sortedData,
    { showInventoryAll, showFastDelivery, priceRange }
  ) => {
    return sortedData
      .filter(({ inStock }) => (showInventoryAll ? true : inStock))
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))
      .filter(
        ({ discountedPrice }) =>
          discountedPrice > 0 && discountedPrice <= priceRange
      );
  };

  const filteredData = getFilteredData(sortedData, {
    showInventoryAll,
    showFastDelivery,
    priceRange,
  });

  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Main filteredData={filteredData} />
    </div>
  );
}
