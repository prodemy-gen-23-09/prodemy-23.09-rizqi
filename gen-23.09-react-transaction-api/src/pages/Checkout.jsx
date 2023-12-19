/* eslint-disable no-unused-vars */
import BannerImage from "../components/User/BannerImage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { getAllUsers } from "../service/users";

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataCart, setDataCart] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const user = useSelector((state) => state.auth.user);
  const [deliveryService, setDeliveryService] = useState("Disabled");
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [dataProfile, setDataProfile] = useState([]);
  const { mutate } = getAllUsers(user.id);
  const { handleSubmit } = useForm({});

  const deleteAllItemsByUserId = async (userId) => {
    try {
      const itemsToDelete = dataCart.filter((item) => item.userId === userId);
      console.log(itemsToDelete);
      for (const itemToDelete of itemsToDelete) {
        await axios.delete(`http://localhost:3000/checkout/${itemToDelete.id}`);
      }

      console.log(`Items for userId ${userId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting items:", error);
    }
  };

  const onSubmit = () => {
    deleteAllItemsByUserId(user.id);
    navigate(`/overview`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleDeliveryServiceChange = (event) => {
    const selectedService = event.target.value;
    setDeliveryService(selectedService);
    let cost = 0;
    switch (selectedService) {
      case "Same Day":
        cost = 50000;
        break;
      case "Next Day":
        cost = 30000;
        break;
      case "Regular":
        cost = 20000;
        break;
      case "Cargo":
        cost = 100000;
        break;
      default:
        cost = 0;
    }

    setDeliveryCost(cost);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userId = user ? user.id : "";
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );
        const userProfileData = response.data;
        setDataProfile(userProfileData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    mutate();
    fetchProfileData();
  }, [user, mutate]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userId = user ? user.id : "";
        const response = await axios.get(
          `http://localhost:3000/checkout?userId=${userId}`
        );
        setDataCart(response.data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [user]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productIds = dataCart.flatMap((cartItem) =>
          cartItem.items.map((item) => item.productId)
        );
        const uniqueProductIds = Array.from(new Set(productIds));
        const productDetailsPromises = uniqueProductIds.map((productId) =>
          axios.get(`http://localhost:3000/products/${productId}`)
        );
        const productDetailsResponses = await Promise.all(
          productDetailsPromises
        );
        const productDetailsMap = productDetailsResponses.reduce(
          (acc, response) => {
            acc[response.data.id] = response.data;
            return acc;
          },
          {}
        );
        setProductDetails(productDetailsMap);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (dataCart.length > 0) {
      fetchProductDetails();
    }
  }, [dataCart]);

  useEffect(() => {
    const calculateCartTotal = () => {
      let total = 0;

      dataCart.forEach((cartItem) => {
        const productPrice =
          productDetails[cartItem.items[0]?.productId]?.price || 0;
        total += cartItem.items[0]?.quantity * productPrice;
      });
      const deliveryServiceCost = getDeliveryServiceCost();
      total += deliveryServiceCost;

      setCartTotal(total);
    };

    const getDeliveryServiceCost = () => {
      const selectedDeliveryService = deliveryService;
      switch (selectedDeliveryService) {
        case "Instant":
          return 54000;
        case "Next Day":
          return 38000;
        case "Regular":
          return 24000;
        case "Cargo":
          return 16000;
        default:
          return 0;
      }
    };

    calculateCartTotal();
  }, [dataCart, productDetails, deliveryService]);

  console.log(dataProfile);
  return (
    <div>
      <BannerImage title="Checkout" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <div className="flex flex-col mx-[175px] my-[100px] w-[750px] gap-2">
              <h1 className="text-3xl font-bold">Billing Details</h1>
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex justify-between">
                  <h1 className="text-xl font-semibold">Name</h1>
                  <p className="w-8/12">{dataProfile.username}</p>
                </div>
                <div className="flex justify-between mb-4">
                  <h1 className="text-xl font-semibold">Address</h1>
                  <p className="w-8/12 text-justify">{dataProfile.address}</p>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-xl font-semibold">Phone</h1>
                  <p className="w-8/12">{dataProfile.phone}</p>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-xl font-semibold">Postal Code</h1>
                  <p className="w-8/12">{dataProfile.postalcode}</p>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-xl font-semibold">Email</h1>
                  <p className="w-8/12">{dataProfile.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-[175px] my-[100px] w-[530px] gap-10">
            <table>
              <thead>
                <tr>
                  <th className="text-left text-3xl">Product</th>
                  <th className="text-right text-lg">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {dataCart.map((cartItem) => (
                  <tr key={cartItem.id}>
                    <td className="text-left">
                      {productDetails[cartItem.items[0]?.productId]?.title} x{" "}
                      {cartItem.items[0]?.quantity}
                    </td>
                    <td className="text-right">
                      {formatPrice(
                        productDetails[cartItem.items[0]?.productId]?.price || 0
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="font-semibold text-left">Subtotal </td>
                  <td className="font-semibold text-right">
                    {formatPrice(cartTotal)}
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-semibold">
                  Delivery Service
                </span>
              </div>
              <select
                className="select select-bordered"
                onChange={handleDeliveryServiceChange}
                value={deliveryService}
              >
                <option value="Disabled" disabled>
                  Pick delivery service
                </option>
                <option value="Instant">Instant</option>
                <option value="Next Day">Next Day</option>
                <option value="Regular">Regular</option>
                <option value="Cargo">Cargo</option>
              </select>
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-md font-semibold">
                  Payment Method
                </span>
              </div>
              <select
                className="select select-bordered"
                onChange={handleDeliveryServiceChange}
                value={deliveryService}
              >
                <option value="Disabled" disabled>
                  Pick delivery service
                </option>
                <option value="Instant">Transfer</option>
                <option value="Next Day">E-Wallet</option>
              </select>
            </label>

            <div className="flex justify-between">
              <div className="font-semibold text-2xl text-left">Total </div>
              <div className="font-semibold text-2xl text-right text-color1_selected">
                {formatPrice(cartTotal)}
              </div>
            </div>
            <hr />

            <div className="flex justify-center">
              <button
                className="bg-color1_selected h-14 w-1/2 rounded-md hover:bg-color_home hover:text-black text-lg font-normal text-white 
            "
                type="submit"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
