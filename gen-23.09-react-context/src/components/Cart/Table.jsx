/* eslint-disable react/prop-types */
import Button from "../../pages/Admin/components/Button";

function Table({ cartItems }) {
  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
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
              <td>
                <div className="flex gap-10 justify-center">
                  <Button title="Edit" onClick={() => console.log("Edit")} />
                  <Button
                    title="Delete "
                    onClick={() => console.log("Delete")}
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

export default Table;
