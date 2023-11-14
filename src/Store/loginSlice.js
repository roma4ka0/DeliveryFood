import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserName: null,
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.UserName = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.UserName = null;
      state.isLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
