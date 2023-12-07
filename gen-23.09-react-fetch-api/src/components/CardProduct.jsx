/* eslint-disable react/prop-types */
function CardProduct(props) {
  return (
    <div>
      <div
        className="hover:bg-color1_selected transition-all duration-1000 ease-out transform hover:opacity-80 text-center mx-16 mt-12 w-80 h-[450px] cursor-pointer rounded-md shadow-lg"
        id={props.id}
        onClick={props.onClick}
      >
        <div className="absolute text-gray-800 right-2 top-2">{props.date}</div>
        <img
          src={props.image}
          alt="imgproduct"
          className="rounded-md w-full h-3/4"
        />
        <h1 className="my-2 text-3xl font-semibold">{props.title}</h1>
        <p className="mb-2">{props.desc}</p>
        <p className="mb-2">{props.price}</p>
      </div>
    </div>
  );
}

export default CardProduct;
