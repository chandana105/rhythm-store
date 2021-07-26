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
        productDispatch({
          type: "SHOW_ERROR",
          payload: false,
        });
        const { data } = await axios({
          method: requestType,
          url,
        });
        productDispatch({
          type: "FETCH_ALL_PRODUCTS",
          payload: data.products,
        });
        // console.log("yeh rha res", data);
        productDispatch({
          type: "SHOW_ERROR",
          payload: false,
        });
      } catch (err) {
        productDispatch({
          type: "SHOW_ERROR",
          payload: err,
        });
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
  }, []);
};

//3. agr products from usestore ki leng = 0 hai , then reducer se vo type ie to fetch rpdcts dispathc krdo fxn , nhi toh showloader and errorr
