/* eslint-disable no-unused-vars */
import BannerImageHome from "../../components/User/BannerImageHome";
import ListCategory from "../../layout/User/ListCategory";
import ListProductShop from "../../layout/User/ListProductShop";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import axios from "axios";
import useSWR from "swr";

export default function Homepage() {
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
          {isLoading ? (
            <div className="flex justify-center items-center min-h-screen">
              <PacmanLoader color="#B88E2F" />
            </div>
          ) : (
            <ListProductShop products={data} />
          )}
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
