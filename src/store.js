import { configureStore } from "@reduxjs/toolkit";
import withdrawSlice from "./withdrawSlice";
export const store = configureStore({
  reducer: {
    withdraw: withdrawSlice
  }
});
