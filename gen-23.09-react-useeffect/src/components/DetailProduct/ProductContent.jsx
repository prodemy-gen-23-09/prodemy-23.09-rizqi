import ButtonSize from "./ButtonSize";
import QuantityProduct from "./QuantityProduct";

/* eslint-disable react/prop-types */
function ProductContent(props) {
  return (
    <div className="flex flex-col gap-4 w-5/12">
      <h1 className="text-5xl font-semibold" id="productName">
        {props.title}
      </h1>
      <p className="text-3xl text-gray-400" id="productPrice">
        {props.price}
      </p>
      <div className="flex">
        <img
          src="/src/assets/detailproduct/rating.png"
          alt="rating"
          className="w-32"
        />
        <p className="text-gray-400">| 5 Customer Review</p>
      </div>
      <p className="w-4/6" id="productDescription">
        {props.desc}
      </p>
      <p>Size</p>
      <ButtonSize />
      <p>Color</p>
      <div className="flex gap-4">
        <button className="flex bg-color2 hover:opacity-60 w-10 h-10 rounded-full justify-center items-center"></button>
        <button className="flex bg-black hover:opacity-60 w-10 h-10 rounded-full justify-center items-center"></button>
        <button className="flex bg-color1_selected hover:opacity-60 w-10 h-10 rounded-full justify-center items-center"></button>
      </div>

      <QuantityProduct />

      <hr />
      <div className="flex flex-col">
        <p className="text-gray-400 mt-6">Release Date : {props.date}</p>
        <p className="text-gray-400 mt-6">SKU : SS001</p>
        <p className="text-gray-400 mt-6">Category : {props.category}</p>
        <p className="text-gray-400 mt-6">Tags : Sofa, Chair, Home, Shop</p>
        <p className="text-gray-400 mt-6">Share</p>
      </div>
    </div>
  );
}

export default ProductContent;
