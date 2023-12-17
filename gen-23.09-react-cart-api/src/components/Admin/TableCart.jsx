/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Button from "./Button";

export default function TableCart({ cart }) {
  return (
    <>
      <table className="table-fixed w-full">
        <thead className="bg-color_home h-16 w-full">
          <tr>
            <th>No</th>
            <th>Date</th>
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart?.map((cart, index) => (
              <tr key={cart.id} className="text-center">
                <td>{index + 1}</td>
                <td>{cart.date}</td>
                <td>{cart.email}</td>
                <td>{cart.username}</td>
                <td>
                  <div className="flex gap-10 justify-center">
                    <Button
                      title="Detail"
                      onClick={() => console.log("Detail")}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
