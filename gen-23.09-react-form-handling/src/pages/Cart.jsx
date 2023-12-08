import BannerImage from "../components/BannerImage";
import BannerService from "../components/BannerService";
import Table from "../components/Cart/Table";

function Cart() {
  const price = 12500000;
  const qty = 10;
  const total = price * qty;
  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };
  return (
    <>
      <BannerImage title="Cart" />
      <div className="flex my-20 mx-[100px] justify-between">
        <Table
          image="/src/assets/shop/product1.png"
          title="Asgaard Sofa"
          price={formatPrice(price)}
          quantity={qty}
          subtotal={formatPrice(total)}
        />
        <div className="flex flex-col bg-color_home w-[400px] h-[400px] p-8 rounded-sm shadow-lg">
          <div className="flex flex-col">
            <p className="text-3xl font-bold mx-auto">Cart Totals</p>
            <p className="text-xl mt-32">Totals : {formatPrice(total)}</p>
            <button className="bg-color1_selected hover:bg-color3 mt-24 rounded-sm shadow-lg w-52 h-10 mx-auto font-semibold ">
              Check Out
            </button>
          </div>
        </div>
      </div>
      <BannerService />
    </>
  );
}

export default Cart;
