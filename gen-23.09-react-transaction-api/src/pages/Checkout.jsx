/* eslint-disable no-unused-vars */
import BannerImage from "../components/User/BannerImage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getAllUsers } from "../service/users";
import { formatPrice } from "../service/price";

export default function Checkout() {
  const navigate = useNavigate();
  const [dataCart, setDataCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const user = useSelector((state) => state.auth.user);
  const [deliveryService, setDeliveryService] = useState("Disabled");
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [dataProfile, setDataProfile] = useState([]);
  const { mutate } = getAllUsers(user.id);
  const { handleSubmit } = useForm({});

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
    const fetchCheckoutData = async () => {
      try {
        const userId = user ? user.id : "";
        const response = await axios.get(
          `http://localhost:3000/checkout?userId=${userId}`
        );
        const responseData = response.data;

        const mergedData = responseData.map((item) => item.data).flat();

        setDataCart(mergedData);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCheckoutData();
  }, [user]);

  const individualSubtotals = dataCart.map((cartItem) => {
    return (cartItem.price || 0) * (cartItem.quantity || 0);
  });

  const subtotal = individualSubtotals.reduce(
    (sum, individualSubtotal) => sum + individualSubtotal,
    0
  );

  useEffect(() => {
    const calculateCartTotal = () => {
      const subtotal = individualSubtotals.reduce(
        (sum, individualSubtotal) => sum + individualSubtotal,
        0
      );
      const total = subtotal + deliveryCost;
      setCartTotal(total);
    };
    calculateCartTotal();
  }, [individualSubtotals, deliveryCost]);

  const addTransaction = async (dataProfile, checkoutData) => {
    try {
      const response = await axios.post("http://localhost:3000/transaction", {
        userId: user.id,
        dataProfile,
        checkoutData: checkoutData,
        total: cartTotal,
        date: new Date(),
      });
      console.log("Transaction added successfully:", response.data);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const onSubmit = () => {
    addTransaction(dataProfile, dataCart);
    navigate(`/overview/${user.id}`);
  };

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
                {dataCart.map((cartItem, index) => (
                  <tr key={index}>
                    <td className="text-left">
                      {cartItem.title} x {cartItem.quantity}
                    </td>
                    <td className="text-right">
                      {formatPrice(cartItem.price || 0)}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="font-semibold text-left">Subtotal </td>
                  <td className="font-semibold text-right">
                    {formatPrice(subtotal)}
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
