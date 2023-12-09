/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "./Button";
import InputText from "./InputText";

function Modals({ closeModal, title, onSubmit }) {
  const { register, handleSubmit: formSubmit, getValues } = useForm();

  const submitForm = async () => {
    const newProduct = {
      title: getValues("title"),
      price: getValues("price"),
      stock: getValues("stock"),
    };
    console.log(newProduct);
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
          <InputText
            type="text"
            id="title"
            title="Title"
            placeholder="Input a title of product"
            register={register}
          />
          <InputText
            type="number"
            id="price"
            title="Price"
            placeholder="Input a price of product"
            register={register}
          />
          <InputText
            type="number"
            id="stock"
            title="Stock"
            placeholder="Input a stock of product"
            register={register}
          />
        </div>
        <div className="flex mt-10 justify-end">
          <Button onClick={submitForm} title="Submit" />
        </div>
      </div>
    </>
  );
}

export default Modals;
