/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import BannerImage from "../components/User/BannerImage";
import axios from "axios";
import { useParams } from "react-router-dom";
import { formatDate } from "../service/formatDate";
import { formatPrice } from "../service/price";

export default function DetailTransaction() {
  const { userId } = useParams();
  const [detailDataTransaction, setDetailDataTransaction] = useState([]);
  const [dataProfile, setDataProfile] = useState([]);

  useEffect(() => {
    const fetchDetailTransactionData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/transaction?userId=${userId}`
        );
        const responseData = response.data;
        const mergedData = responseData
          .map((item) => {
            const flattenedCheckoutData = item.checkoutData.map(
              (checkoutItem) => ({
                ...checkoutItem,
                dataProfile: item.dataProfile,
                total: item.total,
                date: item.date,
              })
            );
            return flattenedCheckoutData;
          })
          .flat();
        setDetailDataTransaction(mergedData);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchDetailTransactionData();
  }, [userId]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );
        const userProfileData = response.data;
        setDataProfile(userProfileData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchProfileData();
  }, [userId]);

  const totalAmount = detailDataTransaction.reduce(
    (acc, transaction) =>
      acc + transaction.total / detailDataTransaction.length,
    0
  );

  return (
    <div>
      <BannerImage title="Detail Transactions" />
      <div className="flex gap-40">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col ml-[175px] my-[100px] w-3/4 gap-2">
            <h1 className="text-3xl font-bold">User Details</h1>
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Name</h1>
                <p className="w-8/12">{dataProfile.username}</p>
              </div>
              <div className="flex justify-between">
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
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Total</h1>
                <p className="w-8/12">{formatPrice(totalAmount)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-md my-[100px]">
          {detailDataTransaction &&
            detailDataTransaction.map((transaction, index) => (
              <div key={index}>
                <div className="flex shadow-xl p-10 ">
                  <img
                    src={transaction.thumbnail}
                    alt={transaction.thumbnail}
                    width={90}
                  />
                  <div className="flex flex-col ml-14">
                    <p>Product Name : {transaction.title}</p>
                    <p>Price : {formatPrice(transaction.price)}</p>
                    <p>Quantity : {transaction.quantity}</p>
                    <p>Date : {formatDate(transaction.date)}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
