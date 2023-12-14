/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import ModalsImage from "./ModalsImage";

export default function OverlayImage({ closeModal, image }) {
  return (
    <>
      <div className="flex max-w-full min-h-screen justify-center items-center overlay">
        <ModalsImage closeModal={closeModal} image={image} />
      </div>
    </>
  );
}
