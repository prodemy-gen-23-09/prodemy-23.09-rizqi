import BannerImage from "../../components/User/BannerImage.jsx";
import BannerService from "../../components/User/BannerService.jsx";

import Products from "../../components/User/Shop/Products.jsx";

export default function Shop() {
  return (
    <>
      <BannerImage title="Shop" />
      <Products />
      <BannerService />
    </>
  );
}
