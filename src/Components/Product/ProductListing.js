import Navbar from "../Nav";
import Sidebar from "./Sidebar";
import Main from "./Main";
// import { data } from "../../Data";
import { useStore } from "../../Contexts/store-context";
import { priceCal } from "../../Utils/utils";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductListing() {
  const { sortBy, showInventoryAll, showFastDelivery, priceRange, searchBy } =
    useStore();

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState({ error: false });

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        setError({ error: false });
        const {
          data: { products },
        } = await axios.get(
          "https://rhythm-store-backend.chandana1.repl.co/products"
        );
        // console.log(response.data.products)
        setData(products);
        setError({ error: false });
      } catch (err) {
        setError({ error: err });
        console.log(err);
        setData([]);
      }
      setLoading(false);
    })();
  }, []);

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

  const sortedData = getSortedData(data, sortBy);

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
    // .filter(({name}) => name.toLowerCase().startsWith(searchBy.toLowerCase()) )
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
      <Main
        filteredData={filteredData}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

// 1
// useEffect(() => {
//   (async () => {
//     try{
//       const response = await axios.get('https://rhythm-store-backend.chandana1.repl.co/products')
//       console.log(response.data.products)
//     } catch (err) {
//       console.error('cant found')
//     }
//   })();

// }, [])
