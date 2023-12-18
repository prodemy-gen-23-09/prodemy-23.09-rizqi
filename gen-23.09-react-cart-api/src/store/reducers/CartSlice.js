import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartTotal: 0,
};

const findItemIndexById = (items, id) => {
  return items.findIndex((item) => item.id === id);
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.count * item.price, 0);
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
    getCartTotal: (state) => {
      state.cartTotal = calculateTotal(state.items);
    },
    clearCart: (state) => {
      state.items = [];
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { addToCart, removeCart, getCartTotal, clearCart, setCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
