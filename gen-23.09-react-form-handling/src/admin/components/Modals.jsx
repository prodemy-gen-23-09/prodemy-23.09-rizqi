import Button from "./Button";
import InputText from "./InputText";

/* eslint-disable react/prop-types */
function Modals({ closeModal, title, onSubmit }) {
  const handleSubmit = (newProduct) => {
    onSubmit(newProduct);
    closeModal();
  };

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
        <h3 className="font-bold text-xl mb-4">{title}</h3>
        <hr />
        <div className="flex flex-col w-full gap-2">
          <InputText title="Title" placeholder="Input a title of product" />
          <InputText title="Price" placeholder="Input a title of product" />
          <InputText title="Stock" placeholder="Input a title of product" />

          <InputText title="Category" placeholder="Input a title of product" />
          <InputText
            title="Release Date"
            placeholder="Input a title of product"
          />
          <InputText title="Title" placeholder="Input a title of product" />
        </div>
        <div className="flex mt-10 justify-end">
          <Button onClick={handleSubmit} title="Submit" />
        </div>
      </div>
    </>
  );
}

export default Modals;
