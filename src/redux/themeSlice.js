import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  theme: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : "light",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const changeThemeReducer = createSlice({
  name: "theme",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    themeStatus: (state, { payload, type }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.theme = payload;
      localStorage.setItem("theme", JSON.stringify(payload));
    },
  },
});

export const { themeStatus } = changeThemeReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTheme = (state) => state.themeStatus.theme;

export default changeThemeReducer.reducer;
