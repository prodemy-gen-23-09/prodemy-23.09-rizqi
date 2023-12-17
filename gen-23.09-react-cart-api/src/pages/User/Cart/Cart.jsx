/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BannerImage from "../../../components/User/BannerImage.jsx";
import Table from "../../../components/User/Cart/Table.jsx";
import BannerService from "../../../components/User/BannerService";
import { useSelector, useDispatch } from "react-redux";
import ModalsCheckout from "../../../components/User/Cart/ModalsCheckout.jsx";
import { clearCart, getCartTotal } from "../../../store/reducers/CartSlice.js";
import axios from "axios";

export default function Cart() {
  const { items, cartTotal } = useSelector((state) => state.cart);
  const [isModalCheckoutOpen, setModalCheckoutOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const openModal = () => {
    setModalCheckoutOpen(true);
  };

  const closeModal = async () => {
    dispatch(clearCart());
    await sendCartDataToAPI(
      user.id,
      user.username,
      user.email,
      items,
      new Date()
    );
    setModalCheckoutOpen(false);
  };

  const sendCartDataToAPI = async (
    userId,
    username,
    email,
    cartItems,
    date
  ) => {
    try {
      const dateObject = new Date(date);
      const year = dateObject.getFullYear();
      const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
      const day = ("0" + dateObject.getDate()).slice(-2);
      const hours = ("0" + dateObject.getHours()).slice(-2);
      const minutes = ("0" + dateObject.getMinutes()).slice(-2);
      const seconds = ("0" + dateObject.getSeconds()).slice(-2);

      const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

      const response = await axios.post(`http://localhost:3000/cart`, {
        cart_items: cartItems,
        userId: userId,
        username: username,
        email: email,
        date: formattedDate,
      });
      console.log("Cart data sent to API:", response.data);
    } catch (error) {
      console.error("Error sending cart data to API:", error);
    }
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, items]);

  console.log(user);

  return (
    <>
      <BannerImage title="Cart" />
      <div className="flex my-20 mx-[100px] justify-between">
        <Table cartItems={items} />
        <div className="flex flex-col bg-color_home w-[400px] h-[400px] p-8 rounded-sm shadow-lg ">
          <div className="flex flex-col justify-center items center">
            <p className="text-3xl font-bold mx-auto">Cart Totals</p>
            <p className="text-xl mt-32 mx-auto">
              Total : {formatPrice(cartTotal)}
            </p>
            <button
              onClick={openModal}
              className="flex bg-color1_selected hover:bg-color3 mt-24 rounded-md shadow-lg w-52 h-10 mx-auto text-white hover:text-black justify-center items-center"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <BannerService />
      {isModalCheckoutOpen && <ModalsCheckout onCancel={closeModal} />}
    </>
  );
}
