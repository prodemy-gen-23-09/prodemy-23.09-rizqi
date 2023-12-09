/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "./Button";
import { useState, useEffect } from "react";
import Overlay from "./Overlay";
import { mutate } from "swr";
import { deleteProduct } from "../service/api";
import axios from "axios";
import PromptDelete from "./PromptDelete";

function TableAdmin({ products }) {
  const [isModalDataOpen, setModalDataOpen] = useState(false);
  const [isPromptDeleteOpen, setPromptDeleteOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`, {
        cache: "no-cache",
      });
      mutate("http://localhost:3000/products");
    } catch (error) {
      console.error("Error handling delete", error);
    }
  };

  const handleDeleteModal = (id) => {
    setDeleteProductId(id);
    setPromptDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deleteProductId) {
      handleDelete(deleteProductId);
      setPromptDeleteOpen(false);
    }
  };

  const openModal = () => {
    setModalDataOpen(true);
  };

  const closeModal = () => {
    mutate();
    setModalDataOpen(false);
  };

  const closePrompt = () => {
    setPromptDeleteOpen(false);
  };

  return (
    <>
      <table className="table-fixed w-full">
        <thead className="bg-color_home h-16 w-full">
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Thumbnail</th>
            <th>Image</th>
            <th>Category</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products?.map((product, index) => (
              <tr key={product.id} className="text-center">
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <img src={product.thumbnail} />
                </td>
                <td>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {product?.image?.map((imageUrl, index) => (
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
                      onClick={() => handleDeleteModal(product.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isModalDataOpen && <Overlay closeModal={closeModal} />}
      {isPromptDeleteOpen && (
        <PromptDelete
          isOpen={isPromptDeleteOpen}
          onCancel={closePrompt}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}

export default TableAdmin;
