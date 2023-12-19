/* eslint-disable no-unused-vars */
import BannerImage from "../components/User/BannerImage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  address: yup.string().required("Street Address is required"),
  city: yup.string().required("Town / City is required"),
  province: yup.string().required("Province is required"),
  zipcode: yup.string().required("ZIP Code is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function Checkout() {
  const navigate = useNavigate();
  const [dataCart, setDataCart] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const user = useSelector((state) => state.auth.user);
  const [deliveryService, setDeliveryService] = useState("Disabled");
  const [deliveryCost, setDeliveryCost] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const deleteAllItemsByUserId = async (userId) => {
    try {
      const itemsToDelete = dataCart.filter((item) => item.userId === userId);
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
    const fetchData = async () => {
      try {
        const productIds = dataCart.flatMap((cartItem) =>
          cartItem.items.map((item) => item.productId)
        );
        console.log(productIds);
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

  return (
    <div>
      <BannerImage title="Checkout" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <div className="flex flex-col mx-[175px] my-[100px] w-[530px] gap-10">
              <h1 className="text-3xl font-bold">Billing Details</h1>
              <div className="flex gap-8">
                <label className="form-control w-[250px]">
                  <div className="label">
                    <span className="label-text text-md font-semibold">
                      First Name
                    </span>
                  </div>
                  <input
                    name="first_name"
                    id="first_name"
                    type="text"
                    className="input input-bordered w-full"
                    autoComplete="first_name"
                    {...register("first_name")}
                  />
                  <p className="error text-sm text-red-600">
                    {errors.first_name?.message}
                  </p>
                </label>
                <label className="form-control w-[250px]">
                  <div className="label">
                    <span className="label-text text-md font-semibold">
                      Last Name
                    </span>
                  </div>
                  <input
                    name="last_name"
                    id="last_name"
                    type="text"
                    className="input input-bordered w-full"
                    autoComplete="last_name"
                    {...register("last_name")}
                  />
                  <p className="error text-sm text-red-600">
                    {errors.last_name?.message}
                  </p>
                </label>
              </div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Street Address
                  </span>
                </div>
                <input
                  name="address"
                  id="address"
                  type="text"
                  className="input input-bordered w-full"
                  autoComplete="address"
                  {...register("address")}
                />
                <p className="error text-sm text-red-600">
                  {errors.address?.message}
                </p>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Town / City
                  </span>
                </div>
                <input
                  name="city"
                  id="city"
                  type="text"
                  className="input input-bordered w-full"
                  autoComplete="city"
                  {...register("city")}
                />
                <p className="error text-sm text-red-600">
                  {errors.city?.message}
                </p>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Province
                  </span>
                </div>
                <input
                  name="province"
                  id="province"
                  type="text"
                  className="input input-bordered w-full"
                  autoComplete="province"
                  {...register("province")}
                />
                <p className="error text-sm text-red-600">
                  {errors.province?.message}
                </p>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    ZIP Code
                  </span>
                </div>
                <input
                  name="zipcode"
                  id="zipcode"
                  type="text"
                  className="input input-bordered w-full"
                  autoComplete="zipcode"
                  {...register("zipcode")}
                />
                <p className="error text-sm text-red-600">
                  {errors.zipcode?.message}
                </p>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Phone
                  </span>
                </div>
                <input
                  name="phone"
                  id="phone"
                  type="number"
                  className="input input-bordered w-full"
                  autoComplete="phone"
                  {...register("phone")}
                />
                <p className="error text-sm text-red-600">
                  {errors.phone?.message}
                </p>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Email Address
                  </span>
                </div>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="input input-bordered w-full"
                  autoComplete="email"
                  {...register("email")}
                />
                <p className="error text-sm text-red-600">
                  {errors.email?.message}
                </p>
              </label>
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
