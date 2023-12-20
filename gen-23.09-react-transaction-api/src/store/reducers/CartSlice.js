import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  cartTotal: 0,
};

const findItemIndexById = (items, id) => {
  return items.findIndex((item) => item.id === id);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = findItemIndexById(state.items, newItem.id);

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count += newItem.count;
      } else {
        state.items.push(newItem);
      }
    },
    removeCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemIndexToRemove = findItemIndexById(state.items, itemIdToRemove);

      if (itemIndexToRemove !== -1) {
        state.items.splice(itemIndexToRemove, 1);
      }
    },
    getCartTotal: (state, action) => {
      state.cartTotal = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeCart, getCartTotal, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const clearCartAsync = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/cart?userId=${userId}`
    );
    const cartItems = response.data;

    for (const item of cartItems) {
      await axios.delete(`http://localhost:3000/cart/${item.id}`);
    }
    dispatch(clearCart());
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};
