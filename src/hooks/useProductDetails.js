import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "../Contexts/store-context";

export const useProductDetails = (requestType, url) => {
  const { productDispatch } = useStore();
  const [productDetails, setProductDetails] = useState([]);

  const getProductDetails = async () => {
    productDispatch({
      type: "SHOW_LOADER",
    });
    try {
      const { data } = await axios({
        method: requestType,
        url,
      });
      setProductDetails(data.product);
    } catch (err) {
      console.log(err);
      setProductDetails([]);
    }
    productDispatch({
      type: "SHOW_LOADER",
    });
  };

  useEffect(() => {
    productDetails.length === 0 && getProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return productDetails;
};
