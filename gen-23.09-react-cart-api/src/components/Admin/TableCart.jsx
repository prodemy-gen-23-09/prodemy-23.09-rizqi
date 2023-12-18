/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Button from "./Button";

export default function TableCart({ cart }) {
  const date2 = new Date();
  const generateTransactionNumber = (date) => {
    const formattedDate = new Date(date).toISOString().replace(/[-T:.Z]/g, "");
    return `TRN.${formattedDate}`;
  };

  console.log(date2);
  return (
    <>
      <table className="table-fixed w-full">
        <thead className="bg-color_home h-16 w-full">
          <tr>
            <th>No</th>
            <th>No. Transaction</th>
            <th>Date</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart?.map((cart, index) => (
              <tr
                key={cart.id}
                className="text-center"
                onClick={() => console.log("Detail")}
              >
                <td>{index + 1}</td>
                <td>{generateTransactionNumber(date2)}</td>
                <td>{cart.date}</td>
                <td>{cart.email}</td>
                <td>{cart.username}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
