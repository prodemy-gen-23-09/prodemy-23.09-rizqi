/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import OverlayProduct from "../Modals/OverlayProduct";

function ButtonCart({ count }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    if (count !== 0) {
      setModalOpen(true);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        className="transition ease-in-out delay-150 hover:bg-color1_selected hover:-translate-y-1 hover:scale-110 duration-300 h-16 w-48 rounded-3xl cursor-pointer border-2 border-black"
        onClick={openModal}
      >
        <span className="m-auto text-xl font-thin">Add To Cart</span>
      </button>
      {isModalOpen && <OverlayProduct closeModal={closeModal} />}
    </>
  );
}

export default ButtonCart;
