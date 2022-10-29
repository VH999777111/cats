import { combineReducers } from "@reduxjs/toolkit";

import { globalSlice } from "./global";

export default () =>
  combineReducers({
    global: globalSlice.reducer,
  });
