import BannerImage from "../components/User/BannerImage";
import BillingDetails from "./BillingDetails";
import ProductCheckout from "./ProductCheckout";

export default function Checkout() {
  return (
    <>
      <BannerImage title="Checkout" />
      <div className="flex">
        <BillingDetails />
        <ProductCheckout />
      </div>
    </>
  );
}
