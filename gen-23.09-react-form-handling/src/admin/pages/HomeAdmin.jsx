/* eslint-disable no-unused-vars */
import BannerImage from "../../components/BannerImage";
import BannerService from "../../components/BannerService";
import Overlay from "../components/Overlay";
import TableAdmin from "../components/TableAdmin";
import { useState } from "react";

function HomeAdmin() {
  const [isModalDataOpen, setModalDataOpen] = useState(false);

  const openModal = () => {
    setModalDataOpen(true);
  };

  const closeModal = () => {
    setModalDataOpen(false);
  };

  return (
    <>
      <BannerImage title="Admin" />
      <div className="flex justify-end mx-20 mt-10 ">
        <button
          className="bg-color1_selected hover:bg-color_home hover:text-color1_selected p-3 rounded-md text-color_home"
          onClick={openModal}
        >
          Add New Data
        </button>
      </div>
      <div className="flex my-10 mx-20 justify-center">
        <TableAdmin />
      </div>
      <BannerService />
      {isModalDataOpen && <Overlay closeModal={closeModal} />}
    </>
  );
}

export default HomeAdmin;
