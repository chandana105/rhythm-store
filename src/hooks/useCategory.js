import { useEffect } from "react";
import axios from "axios";
import { useStore } from "../Contexts/store-context";

export const useCategory = (requestType, url) => {
  const { categories, productDispatch } = useStore();

  const getCategoryData = async () => {
    if (categories.length === 0) {
      productDispatch({
        type: "SHOW_LOADER",
      });
      try {
        const { data } = await axios({
          method: requestType,
          url,
        });
        productDispatch({
          type: "FETCH_ALL_CATEGORIES",
          payload: data.categories,
        });
      } catch (err) {
        console.log(err);
        productDispatch({
          type: "FETCH_ALL_CATEGORIES",
          payload: [],
        });
      }
      productDispatch({
        type: "SHOW_LOADER",
      });
    }
  };

  useEffect(() => {
    getCategoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
