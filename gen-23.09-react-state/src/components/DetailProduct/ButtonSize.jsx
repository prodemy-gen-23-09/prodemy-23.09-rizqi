import { useState } from "react";

export default function ButtonSize(){
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
      setSelectedSize(size);
    };
    return (
        <div className="flex gap-4" id="button">
          <button
            className={`flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${selectedSize === "XS" ? "bg-color_selected" : "bg-color1"} hover:bg-color1 w-10 h-10 rounded-lg justify-center items-center`}
            onClick={() => handleSizeClick("XS")}
          >
            <p>XS</p>
          </button>
          <button
            className={`flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${selectedSize === "L" ? "bg-color_selected" : "bg-color1"} hover:bg-color1 w-10 h-10 rounded-lg justify-center items-center`}
            onClick={() => handleSizeClick("L")}
          >
            <p>L</p>
          </button>
          <button
            className={`flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${selectedSize === "XL" ? "bg-color_selected" : "bg-color1"} hover:bg-color1 w-10 h-10 rounded-lg justify-center items-center`}
            onClick={() => handleSizeClick("XL")}
          >
            <p>XL</p>
          </button>
        </div>
      );
}