import { ADD_TO_CART, REMOVECART, GET_CART_TOTAL, CLEAR_CART } from "../types";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload) => ({
  type: REMOVECART,
  payload,
});

export const getCartTotal = () => ({
  type: GET_CART_TOTAL,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
