import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burger: false,
  mobile: true,
  about: false,
};

const userSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    addMobile(state, action) {
      state.mobile = action.payload;
    },
    openBurger(state, action) {
      state.burger = action.payload;
    },
    openAbout(state, action) {
      state.about = action.payload;
    },
  },
});

export const { addMobile, openBurger, openAbout } = userSlice.actions;

export default userSlice.reducer;
