import BannerImage from "../components/BannerImage.jsx";
import BannerService from "../components/BannerService.jsx";
import PageNumber from "../components/Shop/PageNumber";
import Products from "../components/Shop/Products.jsx";

function Shop() {
  return (
    <>
      <BannerImage title="Shop" title2="Home > Shop" />
      <Products />
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
