/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Button from "./Button";
import InputText from "./InputText";
import { useForm } from "react-hook-form";

function ModalsEdit({ onCancel, closeModal, selectedProduct }) {
  const { register, handleSubmit, setValue } = useForm();
  const { title, desc, price, stock, thumbnail, category, date } =
    selectedProduct || {};

  useEffect(() => {
    console.log(selectedProduct);
    setValue("title", title || "");
    setValue("desc", desc || "");
    setValue("price", price || "");
    setValue("stock", stock || "");
    setValue("thumbnail", thumbnail || "");
    setValue("category", category || "");
    setValue("date", date || "");
  }, [
    selectedProduct,
    setValue,
    category,
    date,
    thumbnail,
    desc,
    stock,
    price,
    title,
  ]);

  const submitForm = (data) => {
    console.log(data);
    closeModal();
  };
  return (
    <>
      <div className="flex min-h-screen justify-center items-center promptdelete">
        <div className="modal-box p-8 h-[800px]">
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
                id="date"
                name="date"
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
      {/* <div className="flex min-h-screen justify-center items-center promptdelete">
        <div className="prompt-content bg-white p-10">
          <p className="text-black">
            Are you sure you want to delete this item?
          </p>
          <div className="flex prompt-buttons gap-10 justify-center mt-10">
            <Button title="Cancel" onClick={onCancel} />
            <Button title="Submit" onClick={onConfirm} />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ModalsEdit;
