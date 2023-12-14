/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import ListProductShop from "../../../layout/User/ListProductShop";
import { PacmanLoader } from "react-spinners";
import axios from "axios";
import useSWR from "swr";

export default function Products() {
  const [sortOption, setSortOption] = useState("newest");
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const getProduct = (url) =>
    axios
      .get(url, { headers: { "Cache-Control": "no-cache" } })
      .then((response) => response.data);
  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/products",
    getProduct,
    {
      onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
    }
  );

  const handleSort = (newSortOption) => {
    setSortOption(newSortOption);
  };

  useEffect(() => {
    if (data) {
      setProducts(data);
      let sorted;

      switch (sortOption) {
        case "lowToHigh":
          sorted = [...data].sort((a, b) => a.price - b.price);
          break;
        case "highToLow":
          sorted = [...data].sort((a, b) => b.price - a.price);
          break;
        case "oldest":
          sorted = [...data].sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          );
          break;
        default:
        case "newest":
          sorted = [...data].sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          );
          break;
      }
      setSortedProducts(sorted);
    }
  }, [sortOption, data]);

  return (
    <>
      <div className="bg-color1 justify-end items-center flex w-auto h-16">
        <div className="px-88 function-tools-filter flex items-center mx-24 gap-10">
          <p>
            Showing 1 - {data?.length || ""} of {data?.length || ""} results
          </p>
          <Dropdown onSort={handleSort} />
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <PacmanLoader color="#B88E2F" />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-4 mb-20">
            <ListProductShop products={sortedProducts} />
          </div>
        </div>
      )}
    </>
  );
}
