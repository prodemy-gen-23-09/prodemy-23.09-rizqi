/* eslint-disable no-unused-vars */
import BannerImageHome from "../components/BannerImageHome";
import ListCategory from "../layout/ListCategory";
import ListProductShop from "../layout/ListProductShop";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";

function Homepage() {
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div>
      <BannerImageHome />
      <div className="flex flex-col justify-center items-center my-20 gap-6">
        <h1 className="text-3xl font-bold">Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ListCategory />
      </div>
      <div className="flex flex-col justify-center items-center my-20 ">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="grid grid-cols-4">
          <ListProductShop products={products} />
        </div>
        <Link to="/shop">
          <button className="bg-white w-[222px] h-20 mt-10 text-color1_selected font-semibold border-2 border-color1_selected hover:bg-color1_selected hover:text-white">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
