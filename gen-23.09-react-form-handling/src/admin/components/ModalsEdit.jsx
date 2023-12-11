/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Button from "./Button";
import InputText from "./InputText";
import { useForm } from "react-hook-form";
import axios from "axios";
import { mutate } from "swr";

function ModalsEdit({ onCancel, selectedProduct, closeModal }) {
  const { register, handleSubmit, setValue } = useForm();
  const { title, desc, price, stock, thumbnail, category, release_date } =
    selectedProduct || {};

  useEffect(() => {
    setValue("title", title || "");
    setValue("desc", desc || "");
    setValue("price", price || "");
    setValue("stock", stock || "");
    setValue("thumbnail", thumbnail || "");
    setValue("category", category || "");
    setValue("date", release_date || "");
  }, [
    selectedProduct,
    setValue,
    category,
    release_date,
    thumbnail,
    desc,
    stock,
    price,
    title,
  ]);

  const submitForm = async (data) => {
    try {
      const updatedProductData = {
        title: data.title,
        desc: data.desc,
        price: parseInt(data.price),
        stock: parseInt(data.stock),
        thumbnail: data.thumbnail,
        category: data.category,
        release_date: data.release_date,
      };

      await axios.put(
        `http://localhost:3000/products/${selectedProduct.id}`,
        updatedProductData
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
    mutate("http://localhost:3000/products");
    closeModal();
  };
  return (
    <>
      <div className="flex max-w-full min-h-screen justify-center items-center modalsedit">
        <div className="modal-box p-8">
          <form onSubmit={handleSubmit(submitForm)}>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onCancel}
            >
              ✕
            </button>
            <h3 className="font-bold text-xl mb-4">Edit Data</h3>
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
              <div className="flex-col flex justify-start gap-2">
                <label className="form-control w-full">
                  <span className="text-sm font-semibold text-left">
                    Description
                  </span>
                  <textarea
                    id="desc"
                    name="desc"
                    className="textarea textarea-bordered text-sm"
                    placeholder="input Description of product"
                    {...register("desc")}
                  ></textarea>
                </label>
              </div>
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
              <InputText
                type="text"
                id="thumbnail"
                name="thumbnail"
                title="Thumbnail"
                placeholder="Input image for thumbnail of product"
                register={register}
              />
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
            </div>
            <div className="flex mt-10 justify-end">
              <Button type="submit" title="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalsEdit;
