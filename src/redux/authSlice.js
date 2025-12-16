import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { ACCESSTOKEN } from "../constants";

const initialState = {
  isAuthenticated: Boolean(Cookies.get(ACCESSTOKEN)),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.role = null;
      Cookies.remove(ACCESSTOKEN);
    },
  },
});

export const { setAuthenticated, setRole, logout } = authSlice.actions;
export default authSlice.reducer;
