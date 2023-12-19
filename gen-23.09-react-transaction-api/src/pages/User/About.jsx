/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import BannerImage from "../../components/User/BannerImage";
import axios from "axios";
import { useSelector } from "react-redux";

export default function About() {
  const [dataCheckout, setDataCheckout] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userId = user ? user.id : "";
        const response = await axios.get(
          `http://localhost:3000/transaction?userId=${userId}`
        );
        const responseData = response.data;

        const mergedData = responseData.map((item) => item.data).flat();

        setDataCheckout(mergedData);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [user]);
  return (
    <div>
      <BannerImage title="Transactions" />
    </div>
  );
}
