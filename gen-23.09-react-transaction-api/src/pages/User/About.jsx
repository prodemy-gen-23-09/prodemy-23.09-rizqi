/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import BannerImage from "../../components/User/BannerImage";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "../../components/Admin/Button";

export default function About() {
  const [dataTransaction, setDataTransaction] = useState([]);
  const user = useSelector((state) => state.auth.user);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return (
      date.toLocaleDateString("en-US", options) +
      " " +
      date.toLocaleTimeString()
    );
  }

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const userId = user ? user.id : "";
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
        setDataTransaction(mergedData);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchTransactionData();
  }, [user]);

  console.log(dataTransaction);
  return (
    <div>
      <BannerImage title="Transactions" />
      <div className="flex mt-20 mx-5">
        <table className="table-fixed w-full">
          <thead className="bg-color_home h-16">
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dataTransaction
              .reduce((acc, item) => {
                const existingRow = acc.find((row) => row.date === item.date);

                if (existingRow) {
                  existingRow.items.push(
                    `${item.title} - ${item.quantity} pcs`
                  );
                  existingRow.total += item.total;
                  existingRow.quantity += item.quantity;
                } else {
                  acc.push({
                    date: item.date,
                    items: [`${item.title} - ${item.quantity} pcs`],
                    total: item.total,
                    quantity: item.quantity,
                  });
                }

                return acc;
              }, [])
              .map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{formatDate(row.date)}</td>
                  <td>{row.items.join(", ")}</td>
                  <td>{row.total}</td>
                  <td>{row.quantity}</td>
                  <td>
                    <Button title="Detail" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
