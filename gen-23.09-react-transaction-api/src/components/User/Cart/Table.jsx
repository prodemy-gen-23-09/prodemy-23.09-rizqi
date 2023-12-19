/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Table() {
  const navigate = useNavigate();
  const [dataCart, setDataCart] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});
  const user = useSelector((state) => state.auth.user);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const increment = (productId) => {
    const updatedDataCart = dataCart.map((cart) => {
      if (cart.items[0].productId === productId) {
        return {
          ...cart,
          items: [{ ...cart.items[0], quantity: cart.items[0].quantity + 1 }],
        };
      }
      return cart;
    });
    setDataCart(updatedDataCart);
  };

  const decrement = (productId) => {
    const updatedDataCart = dataCart.map((cart) => {
      if (cart.items[0].productId === productId && cart.items[0].quantity > 0) {
        return {
          ...cart,
          items: [{ ...cart.items[0], quantity: cart.items[0].quantity - 1 }],
        };
      }
      return cart;
    });
    setDataCart(updatedDataCart);
  };

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${itemId}`);

      const updatedDataCart = dataCart.filter((item) => item.id !== itemId);
      setDataCart(updatedDataCart);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleCheckout = async () => {
    const userId = user ? user.id : "";
    if (dataCart.length === 0) {
      alert("Cart is empty. Cannot proceed with checkout.");
      return;
    }

    try {
      const checkoutData = dataCart
        .filter((cartItem, index) => checkedItems[index])
        .map((cartItem) => ({
          productId: cartItem.items[0].productId,
          quantity: cartItem.items[0].quantity,
        }));

      await axios.post(`http://localhost:3000/checkout`, {
        userId: userId,
        items: checkoutData,
      });
      navigate(`/checkout/${userId}`);
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userId = user ? user.id : "";
        const response = await axios.get(
          `http://localhost:3000/cart?userId=${userId}`
        );
        setDataCart(response.data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productIds = dataCart.flatMap((cartItem) =>
          cartItem.items.map((item) => item.productId)
        );
        const uniqueProductIds = [...new Set(productIds)];
        const productDetailsPromises = uniqueProductIds.map((productId) =>
          axios.get(`http://localhost:3000/products/${productId}`)
        );
        const responses = await Promise.all(productDetailsPromises);
        const productDetailsArray = responses.map((response) => response.data);
        const productDetailsMap = productDetailsArray.reduce((acc, product) => {
          acc[product.id] = product;
          return acc;
        }, {});
        setProductDetails(productDetailsMap);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    if (dataCart.length > 0) {
      fetchData();
    }
  }, [dataCart]);

  useEffect(() => {
    const calculateCartTotal = () => {
      let total = 0;
      dataCart.forEach((cart, index) => {
        const productPrice =
          productDetails[cart.items[0].productId]?.price || 0;
        if (checkedItems[index]) {
          total += cart.items[0].quantity * productPrice;
        }
      });
      setCartTotal(total);
    };

    calculateCartTotal();
  }, [dataCart, productDetails, checkedItems]);

  return (
    <>
      <div className="flex my-20 mx-[100px] justify-between">
        <table className="table-fixed w-[1200px] ml-10">
          <thead className="bg-color_home h-16">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataCart.map((cart, index) => (
              <tr key={cart.id || index} className="text-center">
                <td>
                  <input
                    type="checkbox"
                    id={`checkout-${index}`}
                    checked={checkedItems[index] || false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td>
                  <div className="flex items-center justify-center gap-6">
                    <img
                      src={productDetails[cart.items[0].productId]?.thumbnail}
                      width={120}
                      alt={productDetails[cart.items[0].productId]?.title}
                    />
                  </div>
                </td>
                <td>{productDetails[cart.items[0].productId]?.title}</td>
                <td>
                  {formatPrice(
                    productDetails[cart.items[0].productId]?.price || 0
                  )}
                </td>
                <td>
                  <div className="flex justify-center items-center">
                    <div className="flex h-10 w-24 rounded-xl relative bg-transparent mt-1 border-2">
                      <button
                        className="h-full w-20 rounded-3xl cursor-pointer"
                        onClick={() => decrement(cart.items[0].productId)}
                      >
                        <span className="m-auto text-2xl font-thin text-black hover:text-color1_selected">
                          -
                        </span>
                      </button>
                      <div className="justify-center w-full font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none">
                        {cart.items[0].quantity}
                      </div>
                      <button
                        className="h-full w-20 cursor-pointer"
                        onClick={() => increment(cart.items[0].productId)}
                      >
                        <span className="m-auto text-2xl font-thin text-black hover:text-color1_selected">
                          +
                        </span>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  {formatPrice(
                    cart.items[0].quantity *
                      (productDetails[cart.items[0].productId]?.price || 0)
                  )}
                </td>
                <td>
                  <div className="flex justify-center w-full">
                    <button
                      className="btn btn-sm btn-circle btn-ghost"
                      onClick={() => handleDelete(cart.id)}
                    >
                      <FaTrash size={30} color="B88E2F" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col bg-color_home w-[400px] h-[400px] p-8 rounded-sm shadow-lg ">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold mx-auto">Cart Totals</p>
            <p className="text-xl mt-32 mx-auto">
              Total : {formatPrice(cartTotal)}
            </p>
            <button
              className="flex bg-color1_selected hover:bg-color3 mt-24 rounded-md shadow-lg w-52 h-10 mx-auto text-white hover:text-black justify-center items-center"
              onClick={handleCheckout}
              disabled={!Object.values(checkedItems).some((value) => value)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
