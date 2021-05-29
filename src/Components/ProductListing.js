import Navbar from "./Nav";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { data } from "../Data";
import { useStore } from "../Contexts/store-context";

export default function ProductListing() {
  const { sortBy, showInventoryAll, showFastDelivery, priceRange } = useStore();

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

  const getFilteredData = (
    sortedData,
    { showInventoryAll, showFastDelivery, priceRange }
  ) => {
    return sortedData
      .filter(({ inStock }) => (showInventoryAll ? true : inStock))
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))
      .filter(
        ({ priceDetails }) =>
          priceDetails.discountedPrice > 0 &&
          priceDetails.discountedPrice <= priceRange
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
