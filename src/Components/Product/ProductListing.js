import Navbar from "../Nav";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useStore } from "../../Contexts/store-context";
import { priceCal } from "../../Utils/utils";
import { useProduct } from "../../hooks/useProduct";
import url from "../../config";
import { useParams } from "react-router-dom";
import { useCategoryDetails } from "../../hooks/useCategoryDetails";

export default function ProductListing() {
  const {
    products,
    sortBy,
    sortByCategory,
    showInventoryAll,
    showFastDelivery,
    priceRange,
    searchBy,
  } = useStore();

  useProduct("get", `${url}products`);

  const { categoryId } = useParams();

  const categoryDetails = useCategoryDetails(
    "get",
    `${url}categories/${categoryId}`
  );

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

  const getProducts = (categoryId) => {
    if (categoryId !== undefined) {
      return categoryDetails;
    }
    return products;
  };

  const productsData = getProducts(categoryId);

  const sortedData = getSortedData(productsData, sortBy);

  const getFilteredData = (
    sortedData,
    { showInventoryAll, showFastDelivery, priceRange, searchBy, sortByCategory }
  ) => {
    return sortedData
      .filter(({ inStock }) => (showInventoryAll ? true : inStock))
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))
      .filter(
        ({ discountedPrice }) =>
          discountedPrice > 0 && discountedPrice <= priceRange
      )
      .filter(({ name }) => name.toLowerCase().includes(searchBy.toLowerCase()))
      .filter(({ genre }) =>
        sortByCategory === "All" ? true : sortByCategory === genre[0]
      );
  };

  const filteredData = getFilteredData(sortedData, {
    showInventoryAll,
    showFastDelivery,
    priceRange,
    searchBy,
    sortByCategory,
  });

  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Main filteredData={filteredData} />
    </div>
  );
}
