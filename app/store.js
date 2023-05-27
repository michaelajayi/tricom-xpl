import { configureStore } from "@reduxjs/toolkit";
import layout from "./features/layout/layoutSlice";

export const store = configureStore({
  reducer: {
    layout,
  },
});
