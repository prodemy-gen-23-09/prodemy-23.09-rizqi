/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ButtonCart from "./ButtonCart";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonWishlist from "./ButtonWishlist";
import React, { useState } from "react";

export default function QuantityProduct() {
  const { id } = useParams();
  const [dataCart, setDataCart] = useState([]);
  const [qty, setQty] = React.useState(1);
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const increment = () => {
    setQty(qty + 1);
  };

  const decrement = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      const existingCartItem = dataCart.find((item) => item.productId === id);

      if (existingCartItem) {
        // If the product is already in the cart, update the quantity
        const updatedDataCart = dataCart.map((item) =>
          item.productId === id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );

        setDataCart(updatedDataCart);
      } else {
        const userId = user.id;
        const response = await axios.post(
          `http://localhost:3000/cart?userId=${userId}`,
          {
            productId: id,
            quantity: qty,
            userId: user.id,
            username: user.username,
            email: user.email,
          }
        );

        setDataCart((prevDataCart) => [...prevDataCart, response.data]);
        navigate(`/cart/${user.id}`);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  return (
    <>
      <div className="flex gap-10 mt-20">
        <div className="flex flex-row h-16 w-36 rounded-xl relative bg-transparent mt-1 border-2">
          <button
            className="h-full w-20 rounded-3xl cursor-pointer"
            onClick={decrement}
          >
            <span className="m-auto text-2xl font-thin text-black hover:text-color1_selected">
              -
            </span>
          </button>
          <div className="justify-center w-full font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none">
            {qty}
          </div>
          <button className="h-full w-20 cursor-pointer" onClick={increment}>
            <span className="m-auto text-2xl font-thin text-black hover:text-color1_selected">
              +
            </span>
          </button>
        </div>
        <ButtonWishlist />
        <ButtonCart count={qty} handleAddToCart={handleAddToCart} />
      </div>
    </>
  );
}
