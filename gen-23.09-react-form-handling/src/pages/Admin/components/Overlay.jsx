/* eslint-disable react/prop-types */
import Modals from "./Modals";

function Overlay({ closeModal }) {
  return (
    <>
      <div className="flex max-w-full min-h-screen justify-center items-center overlay">
        <Modals closeModal={closeModal} title="Add New Data" />
      </div>
    </>
  );
}

export default Overlay;
