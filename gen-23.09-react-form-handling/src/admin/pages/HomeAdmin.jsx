/* eslint-disable no-unused-vars */
import BannerImage from "../../components/BannerImage";
import BannerService from "../../components/BannerService";
import Button from "../components/Button";
import Overlay from "../components/Overlay";
import TableAdmin from "../components/TableAdmin";
import { useState } from "react";
import { addProduct, getAllProducts } from "../service/api";
import Modals from "../components/Modals";

function HomeAdmin() {
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

export default HomeAdmin;
