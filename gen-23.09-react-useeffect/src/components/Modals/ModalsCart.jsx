/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Overlay from "./Overlay";
import React, { useState } from "react";

function ModalsCart({ closeModal }) {
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
        <h3 className="font-bold text-lg">Success!</h3>
        <p className="py-4">Successfully Add Product To Cart !</p>
      </div>
    </>
  );
}

export default ModalsCart;
