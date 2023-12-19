/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BannerImage from "../../../components/User/BannerImage.jsx";
import Table from "../../../components/User/Cart/Table.jsx";
import BannerService from "../../../components/User/BannerService";
import { useSelector, useDispatch } from "react-redux";
import ModalsCheckout from "../../../components/User/Cart/ModalsCheckout.jsx";
import { clearCart } from "../../../store/reducers/CartSlice.js";
import { getAllCart } from "../../../service/cart.js";
import { setCartItems } from "../../../store/reducers/CartSlice.js";

export default function Cart() {
  const [isModalCheckoutOpen, setModalCheckoutOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { data: userCart } = getAllCart(user.id);

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
      <Table />
      <BannerService />
      {isModalCheckoutOpen && <ModalsCheckout onCancel={closeModal} />}
    </>
  );
}
