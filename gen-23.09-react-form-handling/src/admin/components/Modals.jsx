/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "./Button";
import InputText from "./InputText";
import axios from "axios";

function Modals({ closeModal, title }) {
  const { register, handleSubmit, getValues } = useForm();

  const submitForm = () => {
    const newProduct = {
      title: getValues("title"),
      price: getValues("price"),
      stock: getValues("stock"),
    };

    axios
      .post("http://localhost:3000/products", newProduct)
      .then(() => {
        console.log("Success Add New Product!");
      })
      .catch((error) => console.log(error));
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
            name="title"
            id="title"
            title="Title"
            placeholder="Input a title of product"
            register={register}
          />
          <InputText
            type="number"
            name="price"
            id="price"
            title="Price"
            placeholder="Input a price of product"
            register={register}
          />
          <InputText
            type="number"
            name="stock"
            id="stock"
            title="Stock"
            placeholder="Input a stock of product"
            register={register}
          />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
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
