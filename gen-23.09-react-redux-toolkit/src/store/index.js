import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/CartSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
