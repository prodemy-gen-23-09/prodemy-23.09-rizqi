/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Overlay from "./OverlayProduct";
import React, { useState } from "react";

function ModalsImage({ closeModal, image }) {
  return (
    <>
      <button
        className="btn btn-sm bg-white btn-circle btn-ghost absolute right-[405px] top-2"
        onClick={closeModal}
      >
        ✕
      </button>
      <img src={image} className="bg-white w-[1000px] h-[850px]" />
    </>
  );
}

export default ModalsImage;
