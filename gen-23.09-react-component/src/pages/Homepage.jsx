import BannerImageHome from "../components/BannerImageHome";
import ListCategory from "../layout/ListCategory";
import ListProduct from "../layout/ListProduct";
import { Link } from "react-router-dom";

function Homepage() {
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
        <ListProduct />{" "}
        <Link to="/shop">
          <button className="bg-white w-[222px] h-20 mt-10 text-color1_selected font-semibold border-2 border-color1_selected hover:bg-color1_selected">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
