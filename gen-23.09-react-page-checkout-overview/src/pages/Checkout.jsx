/* eslint-disable no-unused-vars */
import BannerImage from "../components/User/BannerImage";
import BillingDetails from "./BillingDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Checkout() {
  const [dataCart, setDataCart] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const user = useSelector((state) => state.auth.user);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
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
    const fetchProductDetails = async () => {
      try {
        const productIds = dataCart.map((cartItem) => cartItem.productId);
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
        const productPrice = productDetails[cartItem.productId]?.price || 0;
        total += cartItem.quantity * productPrice;
      });
      setCartTotal(total);
    };

    calculateCartTotal();
  }, [dataCart, productDetails]);
  return (
    <>
      <BannerImage title="Checkout" />
      <div className="flex">
        <BillingDetails />
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
                    {productDetails[cartItem.productId]?.title} x{" "}
                    {cartItem.quantity}
                  </td>
                  <td className="text-right">
                    {formatPrice(
                      productDetails[cartItem.productId]?.price || 0
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
        </div>
      </div>
    </>
  );
}
