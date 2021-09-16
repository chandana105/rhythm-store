import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "../Contexts/store-context";

export const useCategoryDetails = (requestType, url) => {
  const { productDispatch } = useStore();
  const [categoryDetails, setCategoryDetails] = useState([]);

  const getCategoryDetails = async () => {
    productDispatch({
      type: "SHOW_LOADER",
    });
    try {
      const { data } = await axios({
        method: requestType,
        url,
      });
      setCategoryDetails(data.category.products);
    } catch (err) {
      console.log(err);
      setCategoryDetails([]);
    }
    productDispatch({
      type: "SHOW_LOADER",
    });
  };

  useEffect(() => {
    categoryDetails.length === 0 && getCategoryDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return categoryDetails;
};
