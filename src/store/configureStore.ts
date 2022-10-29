import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import { IS_DEVELOPMENT } from "../constants";

export const getStore = () => store;

const preloadedState = {};

const store = configureStore({
  reducer: rootReducer(),
  devTools: IS_DEVELOPMENT,
  enhancers: [],
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
