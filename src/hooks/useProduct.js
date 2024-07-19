import { useEffect } from "react";
import axios from "axios";
import { useStore } from "../Contexts/store-context";

export const useProduct = (requestType, url) => {
  const { products, productDispatch } = useStore();

  const getProductData = async () => {
    if (products.length === 0) {
      productDispatch({
        type: "SHOW_LOADER",
      });
      try {
        const { data } = await axios({
          method: requestType,
          url,
        });
        productDispatch({
          type: "FETCH_ALL_PRODUCTS",
          payload: data.products,
        });
      } catch (err) {
      
        console.log(err);
        productDispatch({
          type: "FETCH_ALL_PRODUCTS",
          payload: [],
        });
      }
      productDispatch({
        type: "SHOW_LOADER",
      });
    }
  };

  useEffect(() => {
    getProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
