import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserByToken } from "../../utils/api/userApi";
// import {snackActions} from '../../utils/customHooks/useSnackBarUtils'

const initialState = {
  token: JSON.parse(localStorage.getItem("userInfo")) || null,
  data: JSON.parse(localStorage.getItem("userInfo")) || null,
  error: null,
  isLoading: false,
  isLogin: false,
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
    setToken(state, action) {
      const { token } = action.payload;
      state.token = token;
      localStorage.setItem("userToken", token);
    },
    logOut(state) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");
      state.token = null;
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
      // snackActions.error('Trouble with auth, relogin please')
      localStorage.removeItem("userToken");
      state.isLoading = false;
      state.token = null;
      state.error = "Error happened while user data loading. Relogin plz";
    },
  },
});

export const { setLogin } = userSlice.actions;

export const { actions } = userSlice;

export default userSlice.reducer;
