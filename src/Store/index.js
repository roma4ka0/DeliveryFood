import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

export default store;
