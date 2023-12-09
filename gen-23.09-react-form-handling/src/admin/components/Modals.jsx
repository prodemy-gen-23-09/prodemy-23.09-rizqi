/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "./Button";
import InputText from "./InputText";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Modals({ closeModal, title }) {
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    price: yup.number().required("Price is required"),
    stock: yup.number().required("Stock is required"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
    closeModal();
  };

  return (
    <>
      <div className="modal-box p-12">
        <form onSubmit={handleSubmit(submitForm)}>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
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
            <p className="error text-red-600">{errors.title?.message}</p>
            <InputText
              type="number"
              name="price"
              id="price"
              title="Price"
              placeholder="Input a price of product"
              register={register}
            />
            <p className="error text-red-600">{errors.price?.message}</p>
            <InputText
              type="number"
              name="stock"
              id="stock"
              title="Stock"
              placeholder="Input a stock of product"
              register={register}
            />
            <p className="error text-red-600">{errors.stock?.message}</p>
            <InputText
              type="file"
              id="thumbnail"
              name="thumbnail"
              placeholder="Input image for thumbnail of product"
              register={register}
            />
          </div>
          <div className="flex mt-10 justify-end">
            <Button type="submit" title="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Modals;
