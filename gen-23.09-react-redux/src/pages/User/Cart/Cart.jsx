/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../../components/BannerImage";
import Table from "../../../components/Cart/Table.jsx";
import BannerService from "../../../components/BannerService";
import { CartContext } from "./CartContext.jsx";

function Cart() {
  const { cartItems, getCartTotal } = useContext(CartContext);
  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <>
      <BannerImage title="Cart" />
      <div className="flex my-20 mx-[100px] justify-between">
        <Table cartItems={cartItems} />
        <div className="flex flex-col bg-color_home w-[400px] h-[400px] p-8 rounded-sm shadow-lg ">
          <div className="flex flex-col justify-center items center">
            <p className="text-3xl font-bold mx-auto">Cart Totals</p>
            <p className="text-xl mt-32 mx-auto">
              Total : {formatPrice(getCartTotal())}
            </p>
            <Link to="/checkout">
              <button className="flex bg-color1_selected hover:bg-color3 mt-24 rounded-md shadow-lg w-52 h-10 mx-auto text-white hover:text-black justify-center items-center">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <BannerService />
    </>
  );
}

export default Cart;
