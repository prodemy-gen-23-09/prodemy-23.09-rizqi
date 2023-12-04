/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import FurnitureProducts from "../../data/data";
import Dropdown from "./Dropdown";
import ListProductShop from "../../layout/ListProductShop";
function Products() {
  const [sortOption, setSortOption] = useState("newest");
  const [sortedProducts, setSortedProducts] = useState(FurnitureProducts);

  const handleSort = (newSortOption) => {
    setSortOption(newSortOption);
  };
  useEffect(() => {
    let sorted;

    switch (sortOption) {
      case "lowToHigh":
        sorted = [...FurnitureProducts].sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sorted = [...FurnitureProducts].sort((a, b) => b.price - a.price);
        break;
      case "oldest":
        sorted = [...FurnitureProducts].sort(
          (a, b) => a.release_date - b.release_date
        );
        break;
      default:
      case "newest":
        sorted = [...FurnitureProducts].sort(
          (a, b) => b.release_date - a.release_date
        );
        break;
    }
    setSortedProducts(sorted);
    console.log(sorted);
  }, [sortOption]);
  return (
    <>
      <div className="bg-color1 justify-end items-center flex w-auto h-16">
        <div className="px-88 function-tools-filter flex items-center mx-24 gap-10">
          <p>
            Showing 1 - {FurnitureProducts.length} of {FurnitureProducts.length}{" "}
            results
          </p>
          <Dropdown onSort={handleSort} />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <ListProductShop products={sortedProducts} />
      </div>
    </>
  );
}

export default Products;
