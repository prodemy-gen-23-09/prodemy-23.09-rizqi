/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../../pages/Admin/components/Button";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/actions/cartActions";
import { FaTrash } from "react-icons/fa";

function Table({ cartItems }) {
  const dispatch = useDispatch();
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleDelete = (itemId) => {
    dispatch(removeFromCart(itemId));
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
            <tr key={item.id || index} className="text-center">
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center justify-center gap-6">
                  <img src={item.thumbnail} width={120} alt={item.title} />
                </div>
              </td>
              <td>{item.title}</td>
              <td>{formatPrice(item.price)}</td>
              <td>{item.count}</td>
              <td>{formatPrice(item.count * item.price)}</td>
              <td>
                {/* <Button title="Delete " onClick={() => handleDelete(item.id)} /> */}
                <button
                  className="btn btn-sm btn-circle btn-ghost "
                  onClick={() => handleDelete(item.id)}
                >
                  <FaTrash size={30} color="B88E2F" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
