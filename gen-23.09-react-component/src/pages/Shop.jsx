import BannerImage from "../components/BannerImage.jsx";
import FilterAndSort from "../components/FilterAndSort.jsx";
import BannerService from "../components/BannerService.jsx";
import ListProduct from "../layout/ListProduct";

function Shop() {
  return (
    <>
      <BannerImage />
      <FilterAndSort />
      <ListProduct/>
      <BannerService />
    </>
  );
}

export default Shop;
