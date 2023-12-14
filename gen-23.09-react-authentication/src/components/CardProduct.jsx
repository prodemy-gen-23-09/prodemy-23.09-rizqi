/* eslint-disable react/prop-types */
export default function CardProduct({
  id,
  image,
  title,
  date,
  desc,
  price,
  onClick,
}) {
  return (
    <div>
      <div
        className="hover:bg-color1_selected transition-all duration-1000 ease-out transform hover:opacity-80 text-center mx-16 mt-12 w-80 h-[450px] cursor-pointer rounded-md shadow-lg"
        id={id}
        onClick={onClick}
      >
        <div className="absolute text-gray-800 right-2 top-2">{date}</div>
        <img src={image} alt="imgproduct" className="rounded-md w-full h-3/4" />
        <h1 className="my-2 text-3xl font-semibold">{title}</h1>
        <p className="mb-2">{desc}</p>
        <p className="mb-2">{price}</p>
      </div>
    </div>
  );
}
