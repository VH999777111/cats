import { fetch } from "../../services";

import { setCats, setIsLoading, applyMoreData } from "./globalSlice";

import { AppDispatch } from "../configureStore";

const getCatsDataByCategory = (categoryId: string, limit: number = 10) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    try {
      const { data } = await fetch({
        endPoint: `/images/search?category_ids=${categoryId}&limit=10`,
        method: "GET",
      });

      dispatch(setCats(data));

      console.log(data);
    } catch (err) {
      // handle error
      dispatch(setIsLoading(false));
    }
  };
};

const getMoreDataByCategory = (categoryId: string, page: number) => {
  return async (dispatch: AppDispatch) => {
    // dispatch(setIsLoading(true));
    try {
      const { data } = await fetch({
        endPoint: `/images/search?category_ids=${categoryId}&limit=10&page=${page}`,
        method: "GET",
      });

      dispatch(applyMoreData(data));

      console.log(data);
    } catch (err) {
      // handle error
      // dispatch(setIsLoading(false));
    }
  };
};

export default {
  getCatsDataByCategory,
  getMoreDataByCategory,
};
