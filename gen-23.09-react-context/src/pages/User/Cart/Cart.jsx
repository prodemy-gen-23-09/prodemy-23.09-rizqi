/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "./CartUtils";
import BannerImage from "../../../components/BannerImage";
import Table from "../../../components/Cart/Table.jsx";
import CartSummary from "./CartSummary.jsx";
import BannerService from "../../../components/BannerService";
function Cart() {
  const { cartItems } = useCart();

  return (
    <>
      <BannerImage title="Cart" />
      <div className="flex my-20 mx-[100px] justify-between">
        <Table cartItems={cartItems} />
        <CartSummary />
      </div>
      <BannerService />
    </>
  );
}

export default Cart;
