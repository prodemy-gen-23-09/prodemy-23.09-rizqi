/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Overlay from "./OverlayProduct";
import React, { useState } from "react";

function ModalsImage({ closeModal, image }) {
  return (
    <>
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
        </form>
        <img src={image} className="w-full h-full" />
      </div>
    </>
  );
}

export default ModalsImage;
