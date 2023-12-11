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
    desc: yup.string().required("Description is required"),
    price: yup.string().required("Price is required"),
    stock: yup.string().required("Stock is required"),
    thumbnail: yup.string().required("Thumbnail is required"),
    category: yup.string().required("Category is required"),
    release_date: yup.string().required("Date is required"),
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
      desc: getValues("desc"),
      price: getValues("price"),
      stock: getValues("stock"),
      thumbnail: getValues("thumbnail"),
      category: getValues("category"),
      release_date: getValues("release_date"),
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
      <div className="modal-box p-8 h-[800px]">
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
            <div className="flex-col flex justify-start gap-2">
              <label className="form-control w-full">
                <span className="text-sm font-semibold text-left ml-0.5 mt-0.5">
                  Description
                </span>
                <textarea
                  id="desc"
                  name="desc"
                  className="textarea textarea-bordered text-md"
                  placeholder="input Description of product"
                  {...register("desc")}
                ></textarea>
              </label>
            </div>
            <p className="error text-red-600">{errors.desc?.message}</p>
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
              type="text"
              id="thumbnail"
              name="thumbnail"
              title="Thumbnail"
              placeholder="Input image for thumbnail of product"
              register={register}
            />
            <p className="error text-red-600">{errors.thumbnail?.message}</p>
            <div className="flex-col flex justify-start gap-2">
              <span className="text-sm font-semibold text-left ml-0.5 mt-0.5">
                Category
              </span>
              <select
                className="select select-bordered w-full"
                defaultValue=""
                id="category"
                name="category"
                {...register("category")}
              >
                <option disabled value="">
                  Choose Category
                </option>
                <option value="Dining">Dining</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Living">Living</option>
              </select>
            </div>
            <InputText
              type="text"
              id="release_date"
              name="release_date"
              title="Date"
              placeholder="Input date for release date of product"
              register={register}
            />
            <p className="error text-red-600">{errors.date?.message}</p>
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
