/* eslint-disable react/prop-types */
function InputText({ id, name, title, placeholder, register, type }) {
  return (
    <>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-md font-semibold">{title}</span>
        </div>
        <input
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full"
          {...register(id)}
        />
      </label>
    </>
  );
}

export default InputText;
