/* eslint-disable react/prop-types */
import { useContext } from "react";
import Button from "../../pages/Admin/components/Button";
import { CartContext } from "../../pages/User/Cart/CartContext";

function Table({ cartItems }) {
  const { removeFromCart } = useContext(CartContext);
  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
  };
  return (
    <>
      <table className="table-fixed w-[1200px] ml-10">
        <thead className="bg-color_home h-16">
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id} className="text-center">
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center justify-center gap-6">
                  <img src={item.image} width={120} alt={item.title} />
                </div>
              </td>
              <td>{item.title}</td>
              <td>{formatPrice(item.price)}</td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.quantity * item.price)}</td>
              <td>
                <Button title="Delete " onClick={() => handleDelete(item.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
