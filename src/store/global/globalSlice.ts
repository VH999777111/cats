import { createSlice } from "@reduxjs/toolkit";

import { getStorageItem, setStorageItem } from "../../services";

import { ICatData } from "../../@types";

interface IGlobal {
  isDarkMode: boolean;
  cats: ICatData[] | null;
  isLoading: boolean;
}

const initialState: IGlobal = {
  isDarkMode: getStorageItem("isDarkMode"),
  cats: null,
  isLoading: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCats: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    applyMoreData: (state, action) => {
      const currentData = state.cats || [];
      state.cats = [...currentData, ...action.payload];
    },
    switchDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      setStorageItem("isDarkMode", state.isDarkMode);
    },
  },
});

export const { setCats, setIsLoading, applyMoreData, switchDarkMode } =
  globalSlice.actions;
