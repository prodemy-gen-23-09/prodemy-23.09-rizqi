/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import FurnitureProducts from "../../data/data";
import Dropdown from "./Dropdown";
import ListProduct from "../../layout/ListProduct";
function FilterAndSort() {
  const [sortedProducts, setSortedProducts] = useState(FurnitureProducts);

  const handleSort = (sortOption) => {
    let sorted;

    switch (sortOption) {
      case "lowToHigh":
        sorted = [...FurnitureProducts].sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sorted = [...FurnitureProducts].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted = [...FurnitureProducts].sort(
          (a, b) => b.release_date - a.release_date
        );
        break;
      case "oldest":
        sorted = [...FurnitureProducts].sort(
          (a, b) => a.release_date - b.release_date
        );
        break;
      default:
        [...FurnitureProducts].sort((a, b) => b.release_date - a.release_date);
        break;
    }
    setSortedProducts(sorted);
    console.log(sorted);
  };
  useEffect(() => {
    console.log("Products Berubah :", sortedProducts);
  }, [sortedProducts]);
  return (
    <>
      <div className="bg-color1 justify-between items-center flex w-auto h-16">
        <div className="function-tools flex items-center mx-24">
          <img
            src="/src/assets/shop/filter.png"
            alt="filter"
            className="mr-10 max-w-8 max-h-8"
          />
          <p className="mr-10">Filters</p>
          <img
            src="/src/assets/shop/grid.png"
            alt="grid"
            className="mr-10 max-w-8 max-h-8"
          />
          <img
            src="/src/assets/shop/viewlist.png"
            alt="viewlist"
            className="mr-10 max-w-8 max-h-8"
          />
          <img
            src="/src/assets/shop/line.png"
            alt="line"
            className="mr-10 max-w-8 max-h-8"
          />
          <p>
            Showing 1-{FurnitureProducts.length} of {FurnitureProducts.length}{" "}
            results
          </p>
        </div>
        <div className="px-88 function-tools-filter flex items-center mx-24">
          <p className="mr-2">Show</p>
          <input
            type="text"
            name="inputData"
            id="inputData"
            placeholder="8"
            className="mr-8 w-40 h-8"
          />
          <Dropdown onSort={handleSort} />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <ListProduct products={sortedProducts} />
      </div>
    </>
  );
}

export default FilterAndSort;
