import { createSlice } from "@reduxjs/toolkit";

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
