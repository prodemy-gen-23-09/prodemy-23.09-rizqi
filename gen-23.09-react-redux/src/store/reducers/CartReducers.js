/* eslint-disable no-case-declarations */
import { ADD_TO_CART, REMOVECART, GET_CART_TOTAL, CLEAR_CART } from "../types";

const initialState = {
  items: [],
};

const findItemIndexById = (items, id) => {
  return items.findIndex((item) => item.id === id);
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.count * item.price, 0);
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItemIndex = findItemIndexById(state.items, newItem.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].count += newItem.count;

        return {
          ...state,
          items: updatedItems,
        };
      } else {
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }

    case REMOVECART:
      const itemIdToRemove = action.payload;
      const itemIndexToRemove = findItemIndexById(state.items, itemIdToRemove);

      if (itemIndexToRemove !== -1) {
        const updatedItems = [...state.items];
        updatedItems.splice(itemIndexToRemove, 1);

        return {
          ...state,
          items: updatedItems,
        };
      } else {
        return state;
      }

    case GET_CART_TOTAL:
      const total = calculateTotal(state.items);
      return {
        ...state,
        cartTotal: total,
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default CartReducer;
