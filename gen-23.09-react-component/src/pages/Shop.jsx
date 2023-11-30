import BannerImage from "../components/BannerImage.jsx";
import FilterAndSort from "../components/FilterAndSort.jsx";
import BannerService from "../components/BannerService.jsx";
import ListProduct from "../layout/ListProduct";
import PageNumber from "../components/PageNumber";

function Shop() {
  return (
    <>
      <BannerImage />
      <FilterAndSort />
      <div className="grid grid-cols-4">
        <ListProduct />
      </div>
      <div className="flex justify-center items-center my-14 gap-10">
        <PageNumber pageNumber="1" />
        <PageNumber pageNumber="2" />
        <PageNumber pageNumber="3" />
        <PageNumber pageNumber="Next" />
      </div>
      <BannerService />
    </>
  );
}

export default Shop;
