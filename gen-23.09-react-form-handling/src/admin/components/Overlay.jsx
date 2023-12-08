/* eslint-disable react/prop-types */
import ModalsAddData from "./ModalsAddData";

function Overlay({ closeModal }) {
  return (
    <>
      <div className="flex max-w-full min-h-screen justify-center items-center overlay">
        <ModalsAddData closeModal={closeModal} />
      </div>
    </>
  );
}

export default Overlay;
