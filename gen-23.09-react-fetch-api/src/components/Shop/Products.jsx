import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import ListProductShop from "../../layout/ListProductShop";
import { getAllProduct } from "../../service/api";

function Products() {
  const [sortOption, setSortOption] = useState("newest");
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const handleSort = (newSortOption) => {
    setSortOption(newSortOption);
  };

  const data = async () => {
    try {
      const result = await getAllProduct();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useState(() => {
    data();
  }, []);

  useEffect(() => {
    let sorted;

    switch (sortOption) {
      case "lowToHigh":
        sorted = [...products].sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sorted = [...products].sort((a, b) => b.price - a.price);
        break;
      case "oldest":
        sorted = [...products].sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
        break;
      default:
      case "newest":
        sorted = [...products].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;
    }
    setSortedProducts(sorted);
  }, [sortOption, products]);

  return (
    <>
      <div className="bg-color1 justify-end items-center flex w-auto h-16">
        <div className="px-88 function-tools-filter flex items-center mx-24 gap-10">
          <p>
            Showing 1 - {products.length} of {products.length} results
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
