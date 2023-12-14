/* eslint-disable react/prop-types */
export default function CardCategory(props) {
  return (
    <div>
      <div
        className="hover:bg-color1_selected transition-all duration-1000 ease-out transform hover:opacity-80 text-center mx-16 mt-12 w-80 h-[450px] cursor-pointer rounded-md shadow-lg"
        id={props.id}
      >
        <img
          src={props.image}
          alt="imgproduct"
          className="rounded-md w-full h-3/4"
        />
        <h1 className="my-10 text-2xl font-semibold">{props.title}</h1>
      </div>
    </div>
  );
}
