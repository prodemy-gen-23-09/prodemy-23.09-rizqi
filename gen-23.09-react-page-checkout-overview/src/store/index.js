import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/CartSlice";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    auth: authSlice,
  },
});

export default store;
