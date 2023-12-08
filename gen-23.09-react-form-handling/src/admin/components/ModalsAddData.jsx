import InputText from "./InputText";

/* eslint-disable react/prop-types */
function ModalsAddData({ closeModal }) {
  return (
    <>
      <div className="modal-box p-12">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl mb-4">Add New Data</h3>
        <hr />
        <div className="flex w-96">
          <InputText title="Title" placeholder="Input a title of product" />
        </div>
      </div>
    </>
  );
}

export default ModalsAddData;
