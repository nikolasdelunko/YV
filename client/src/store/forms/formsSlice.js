import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: null,
  touch: false,
  hardSkills: null,
  text: null,
  touchText: false,
};

const userSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    addSkills(state, action) {
      state.skills = action.payload;
    },
    addHardSkills(state, action) {
      state.hardSkills = action.payload;
    },
    addTouch(state, action) {
      state.touch = action.payload;
    },
    addText(state, action) {
      state.text = action.payload;
    },
    addTouchText(state, action) {
      state.touchText = action.payload;
    }
  },
});

export const { actions } = userSlice;

export default userSlice.reducer;
