import BannerImage from "../components/BannerImage.jsx";
import FilterAndSort from "../components/Shop/FilterAndSort.jsx";
import BannerService from "../components/BannerService.jsx";
import PageNumber from "../components/Shop/PageNumber";

function Shop() {
  return (
    <>
      <BannerImage title="Shop" title2="Home > Shop" />
      <FilterAndSort />
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
