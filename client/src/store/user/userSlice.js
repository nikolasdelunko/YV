import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserByToken } from "../../utils/api/userApi";
import { snackActions } from "../../utils/costumHooks/useSnack";

const initialState = {
  data: JSON.parse(localStorage.getItem("userInfo")) || null,
  error: null,
  isLoading: false,
  isLogin: !!JSON.parse(localStorage.getItem("userInfo")) || false,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await getUserByToken();
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin(state, action) {
      state.isLogin = action.payload;
    },
    setNewData(state, action) {
      state.data = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logOut(state) {
      localStorage.removeItem("userInfo");
      state.data = null;
      return state;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      delete action.payload.password;
      state.data = action.payload.data;
      state.isLoading = false;
      state.error = null;
    },
    [fetchUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUser.rejected]: (state) => {
      snackActions.error("Trouble with auth, relogin please");
      localStorage.removeItem("userInfo");
      state.isLoading = false;
      state.error = "Error happened while user data loading. Relogin plz";
    },
  },
});

export const { setLogin } = userSlice.actions;

export const { actions } = userSlice;

export default userSlice.reducer;
