/* eslint-disable no-unused-vars */
import BannerImage from "../../components/User/BannerImage.jsx";
import BannerService from "../../components/User/BannerService.jsx";
import Button from "../../components/Admin/Button.jsx";
import Overlay from "../../components/Admin/Overlay.jsx";
import TableAdmin from "../../components/Admin/TableAdmin.jsx";
import { useState } from "react";
import { addProduct, getAllProducts } from "../../service/Admin/api.js";
import Modals from "../../components/Admin/Modals.jsx";

export default function HomeAdmin() {
  const [isModalDataOpen, setModalDataOpen] = useState(false);
  const { data, mutate } = getAllProducts();

  const openModal = () => {
    setModalDataOpen(true);
  };

  const closeModal = () => {
    setModalDataOpen(false);
  };

  const handleAddProduct = async (newProduct) => {
    try {
      await addProduct("http://localhost:3000/products", newProduct);
      mutate();
      closeModal();
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
    <>
      <BannerImage title="Admin" />
      <div className="flex justify-end mx-20 mt-10 ">
        <Button onClick={openModal} title="Add New Data" />
      </div>
      <div className="flex my-10 mx-16 justify-center">
        {data?.length === 0 ? (
          <div className="flex">No Data Found</div>
        ) : (
          <TableAdmin products={data} />
        )}
      </div>
      <BannerService />
      {isModalDataOpen && (
        <Overlay closeModal={closeModal}>
          <Modals
            closeModal={closeModal}
            title="Add New Data"
            onSubmit={handleAddProduct}
          />
        </Overlay>
      )}
    </>
  );
}
