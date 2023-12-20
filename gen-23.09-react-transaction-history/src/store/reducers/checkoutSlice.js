// Import yang dibutuhkan
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  checkoutItems: [],
};
const findItemIndexById = (items, id) => {
  return items.findIndex((item) => item.id === id);
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addToCheckout: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = findItemIndexById(
        state.checkoutItems,
        newItem.id
      );

      if (existingItemIndex === -1) {
        state.checkoutItems.push(newItem);
      }
    },
    removeFromCheckout: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemIndexToRemove = findItemIndexById(
        state.checkoutItems,
        itemIdToRemove
      );

      if (itemIndexToRemove !== -1) {
        state.checkoutItems.splice(itemIndexToRemove, 1);
      }
    },
    clearCheckout: (state) => {
      state.checkoutItems = [];
    },
  },
});

export const { addToCheckout, removeFromCheckout, clearCheckout } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;

export const clearCheckoutAsync = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/checkout?userId=${userId}`
    );
    const checkoutItems = response.data;

    for (const item of checkoutItems) {
      await axios.delete(`http://localhost:3000/checkout/${item.id}`);
    }
    dispatch(clearCheckout());
  } catch (error) {
    console.error("Error clearing checkout:", error);
  }
};
