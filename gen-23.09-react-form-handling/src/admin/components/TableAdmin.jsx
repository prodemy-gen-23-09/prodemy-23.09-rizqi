/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "./Button";
import { useState } from "react";
import Overlay from "./Overlay";

function TableAdmin({ products }) {
  const [isModalDataOpen, setModalDataOpen] = useState(false);

  const openModal = () => {
    setModalDataOpen(true);
  };

  const closeModal = () => {
    setModalDataOpen(false);
  };

  return (
    <>
      <table className="table-fixed w-full">
        <thead className="bg-color_home h-16">
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Thumbnail</th>
            <th>Image</th>
            <th>Category</th>
            <th>Release_Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id} className="text-center">
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <img src={product.thumbnail} />
                </td>
                <td>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {product.image.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`Product ${index + 1}`}
                        width={50}
                      />
                    ))}
                  </div>
                </td>
                <td>{product.category}</td>
                <td>{product.release_date}</td>
                <td>
                  <div className="flex gap-10 justify-center">
                    <Button title="Edit" onClick={openModal} />
                    <Button
                      title="Delete "
                      onClick={() => console.log("Button Click")}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isModalDataOpen && <Overlay closeModal={closeModal} />}
    </>
  );
}

export default TableAdmin;
