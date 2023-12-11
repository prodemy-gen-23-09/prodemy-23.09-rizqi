/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "./CartUtils";
import { Link } from "react-router-dom";

function CartSummary() {
  const { cartItems, getCartTotal } = useCart();
  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };
  return (
    <div className="flex flex-col bg-color_home w-[400px] h-[400px] p-8 rounded-sm shadow-lg">
      <div className="flex flex-col">
        <p className="text-3xl font-bold mx-auto">Cart Totals</p>
        <p className="text-xl mt-32">Total : {formatPrice(getCartTotal())}</p>
        <Link to="/checkout">
          <button className="bg-color1_selected hover:bg-color3 mt-24 rounded-sm shadow-lg w-52 h-10 mx-auto font-semibold ">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartSummary;
