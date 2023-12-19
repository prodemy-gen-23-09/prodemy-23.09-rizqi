/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import ModalsCart from "./ModalsCart";

export default function OverlayProduct({ closeModal }) {
  return (
    <>
      <div className="flex max-w-full min-h-screen justify-center items-center overlay">
        <ModalsCart closeModal={closeModal} />
      </div>
    </>
  );
}
