import { configureStore } from "@reduxjs/toolkit";


import postSlice from "./slices/post-slice";

const store = configureStore({
  reducer: {
    list: postSlice,
  },
});

export default store;
