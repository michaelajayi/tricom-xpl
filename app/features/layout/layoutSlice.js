import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleHamburger: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.toggleHamburger = !state.toggleHamburger;
    },
  },
});

export const { toggleMenu } = layoutSlice.actions;

export const selectLayout = (state) => state.layout;

export default layoutSlice.reducer;
