/* eslint-disable react/prop-types */
function Card(props) {
  return (
    <div>
      <div
        className="hover:bg-color1_selected transition-all duration-900 ease-out transform hover:opacity-80 text-center mx-16 mt-12 w-80 cursor-pointer rounded-md shadow-md"
        id={props.id}
      >
        <img
          src={props.image}
          alt="imgproduct"
          className="rounded-md w-full h-3/4"
        />
        <h1 className="my-2 text-3xl font-semibold">{props.title}</h1>
        <p className="desc">{props.desc}</p>
        <p className="mb-2">{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
