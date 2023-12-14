import BannerImage from "../../components/BannerImage.jsx";
import BannerService from "../../components/BannerService.jsx";

import Products from "../../components/Shop/Products.jsx";

export default function Shop() {
  return (
    <>
      <BannerImage title="Shop" />
      <Products />
      <BannerService />
    </>
  );
}
