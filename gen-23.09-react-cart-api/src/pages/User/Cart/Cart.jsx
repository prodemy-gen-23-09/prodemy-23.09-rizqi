/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BannerImage from "../../../components/User/BannerImage.jsx";
import Table from "../../../components/User/Cart/Table.jsx";
import BannerService from "../../../components/User/BannerService";
import { useSelector, useDispatch } from "react-redux";
import ModalsCheckout from "../../../components/User/Cart/ModalsCheckout.jsx";
import { clearCart } from "../../../store/reducers/CartSlice.js";
import { getAllCart } from "../../../service/Admin/api.js";
import { setCartItems } from "../../../store/reducers/CartSlice.js";

export default function Cart() {
  const { items, cartTotal } = useSelector((state) => state.cart);
  const [isModalCheckoutOpen, setModalCheckoutOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { data: userCart } = getAllCart(user.id);
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
    setModalCheckoutOpen(false);
  };

  useEffect(() => {
    if (userCart) {
      dispatch(setCartItems(userCart));
    }
  }, [userCart, dispatch]);

  return (
    <>
      <BannerImage title="Cart" />
      <Table cartItems={items} />
      <BannerService />
      {isModalCheckoutOpen && <ModalsCheckout onCancel={closeModal} />}
    </>
  );
}
