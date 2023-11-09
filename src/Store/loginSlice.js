import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserName: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.UserName = action.payload;
    },
    logout: (state) => {
      state.UserName = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
