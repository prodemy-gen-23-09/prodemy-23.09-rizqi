/* eslint-disable react/prop-types */
function Button({ onClick, title }) {
  return (
    <>
      <button
        className="bg-color1_selected hover:bg-color_home hover:text-color1_selected p-3 rounded-md text-color_home"
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
