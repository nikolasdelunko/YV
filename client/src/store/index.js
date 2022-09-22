import { configureStore } from "@reduxjs/toolkit";
import helpersSlice from "./helpers";
import userSlice from "./user";
import formsSlice from "./forms";

export default configureStore({
  reducer: {
    helpers: helpersSlice,
    user: userSlice,
    forms: formsSlice,
  },
});
