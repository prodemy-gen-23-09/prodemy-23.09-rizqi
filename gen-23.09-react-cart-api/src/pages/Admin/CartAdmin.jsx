/* eslint-disable no-unused-vars */
import TableCart from "../../components/Admin/TableCart.jsx";
import BannerImage from "../../components/User/BannerImage.jsx";
import { getAllCart } from "../../service/Admin/api.js";

export default function CartAdmin() {
  const { data, mutate } = getAllCart();
  return (
    <div>
      <BannerImage title="Admin" />
      <div className="flex my-10 mx-16 justify-center">
        {data?.length === 0 ? (
          <div className="flex">No Data Found</div>
        ) : (
          <TableCart cart={data} />
        )}
      </div>
    </div>
  );
}
