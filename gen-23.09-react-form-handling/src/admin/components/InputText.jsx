/* eslint-disable react/prop-types */
function InputText({ title, placeholder }) {
  return (
    <>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-md font-semibold">{title}</span>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full"
        />
      </label>
    </>
  );
}

export default InputText;
