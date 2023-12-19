/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BannerImage from "../../../components/User/BannerImage.jsx";
import { FaTrash } from "react-icons/fa";
import BannerService from "../../../components/User/BannerService";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../../../store/reducers/CartSlice.js";
import axios from "axios";
import { formatPrice } from "../../../service/price.js";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { cartTotal } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    navigate(`/checkout/${user.id}`);
  };

  const increment = (productId) => {
    const updatedDataCart = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedDataCart);
  };

  const decrement = (productId) => {
    const updatedDataCart = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedDataCart);
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${itemId}`);

      const updatedDataCart = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedDataCart);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/cart?userId=${user.id}`
        );

        if (response.data) {
          const total = response.data.reduce((accumulator, item) => {
            const subtotal = item.quantity * item.price;
            return accumulator + subtotal;
          }, 0);

          dispatch(getCartTotal(total));
          setCartItems(response.data);
        } else {
          console.error("Error: productItems is undefined in the response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, user.id]);
  console.log(cartItems);

  return (
    <>
      <BannerImage title="Cart" />
      <div className="flex my-20 mx-[100px] justify-between">
        <table className="table-fixed w-[1200px] ml-10">
          <thead className="bg-color_home h-16">
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item, index) => (
              <tr key={item.id || index} className="text-center">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center justify-center gap-6">
                    <img src={item.thumbnail} width={120} alt={item.title} />
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{formatPrice(item.price)}</td>
                <td>
                  <div className="flex justify-center items-center">
                    <div className="flex h-10 w-24 rounded-xl relative bg-transparent mt-1 border-2">
                      <button
                        className="h-full w-20 rounded-3xl cursor-pointer"
                        onClick={() => decrement(item.id)}
                      >
                        <span className="m-auto text-2xl font-thin text-black hover:text-color1_selected">
                          -
                        </span>
                      </button>
                      <div className="justify-center w-full font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none">
                        {item.quantity}
                      </div>
                      <button
                        className="h-full w-20 cursor-pointer"
                        onClick={() => increment(item.id)}
                      >
                        <span className="m-auto text-2xl font-thin text-black hover:text-color1_selected">
                          +
                        </span>
                      </button>
                    </div>
                  </div>
                </td>
                <td>{formatPrice(item.quantity * item.price)}</td>
                <td>
                  <button
                    className="btn btn-sm btn-circle btn-ghost"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrash size={30} color="B88E2F" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col bg-color_home w-[400px] h-[400px] p-8 rounded-sm shadow-lg ">
          <div className="flex flex-col justify-center items center">
            <p className="text-3xl font-bold mx-auto">Cart Totals</p>
            <p className="text-xl mt-32 mx-auto">
              Total : {formatPrice(cartTotal)}
            </p>
            <button
              onClick={handleCheckout}
              className="flex bg-color1_selected hover:bg-color3 mt-24 rounded-md shadow-lg w-52 h-10 mx-auto text-white hover:text-black justify-center items-center"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <BannerService />
    </>
  );
}
