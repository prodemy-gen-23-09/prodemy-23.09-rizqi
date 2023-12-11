/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CartContext.js
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log("Data Item", item);
    setCartItems([...cartItems, item]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  useEffect(() => {}, [cartItems]);

  const contextValue = { cartItems, addToCart, getCartTotal };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
