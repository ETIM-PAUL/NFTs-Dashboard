import { configureStore } from "@reduxjs/toolkit";
import changeThemeReducer from "../redux/themeSlice";

export const store = configureStore({
  reducer: {
    themeStatus: changeThemeReducer,
  },
});
