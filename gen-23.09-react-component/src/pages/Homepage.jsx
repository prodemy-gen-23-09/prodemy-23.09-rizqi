import BannerImageHome from "../components/BannerImageHome";
import ListCategory from "../layout/ListCategory";
import ListProduct from "../layout/ListProduct";

function Homepage() {
  return (
    <div>
      <BannerImageHome />
      <div className="flex flex-col justify-center items-center my-20 gap-6">
        <h1 className="text-3xl font-bold">Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ListCategory/>
      </div>

      <div className="flex flex-col justify-center items-center my-20 ">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <ListProduct />
      </div>
    </div>
  );
}

export default Homepage;
