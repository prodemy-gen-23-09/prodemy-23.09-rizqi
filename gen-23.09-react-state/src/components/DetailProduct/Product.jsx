import ButtonSize from "./ButtonSize"

/* eslint-disable react/prop-types */
function Product(props) {
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
          <ButtonSize/>
          <p>Color</p>
          <div className="flex gap-4">
            <button className="flex bg-color2 hover:opacity-60 w-10 h-10 rounded-full justify-center items-center"></button>
            <button className="flex bg-black hover:opacity-60 w-10 h-10 rounded-full justify-center items-center"></button>
            <button className="flex bg-color1_selected hover:opacity-60 w-10 h-10 rounded-full justify-center items-center"></button>
          </div>

          <div className="flex gap-10 mt-20">
            <div className="flex flex-row h-16 w-36 rounded-xl relative bg-transparent mt-1 border-2">
              <button className="h-full w-20 rounded-3xl cursor-pointer">
                <span className="m-auto text-2xl font-thin text-black hover:text-color1_selected">
                  -
                </span>
              </button>
              <input
                type="text"
                className="text-center w-full font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                defaultValue="0"
              />
              <button className="h-full w-20 cursor-pointer">
                <span className="m-auto text-2xl font-thin text-black hover:text-color1_selected">
                  +
                </span>
              </button>
            </div>
            <button className="transition ease-in-out delay-150 hover:bg-color1_selected hover:-translate-y-1 hover:scale-110 duration-300 h-16 w-48 rounded-3xl cursor-pointer border-2 border-black">
              <span className="m-auto text-xl font-thin">Add To Cart</span>
            </button>
          </div>

          <hr />
          <div className="flex flex-col">
            <p className="text-gray-400 mt-6">SKU : SS001</p>
            <p className="text-gray-400 mt-6">Category : {props.category}</p>
            <p className="text-gray-400 mt-6">Tags : Sofa, Chair, Home, Shop</p>
            <p className="text-gray-400 mt-6">Share</p>
          </div>
        </div>
  )
}

export default Product