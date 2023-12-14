/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import CardProduct from "../components/CardProduct";

function ListProductShop({ products }) {
  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  const navigate = useNavigate();
  const onClickCard = (id, name) => {
    navigate(`/detailproduct/${id}/${name}`);
  };

  return (
    <>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <CardProduct
              image={product.thumbnail}
              title={product.title}
              desc={product.category}
              price={formatPrice(product.price)}
              date={product.release_date}
              onClick={() => onClickCard(product.id, product.title)}
            />
          </div>
        ))}
    </>
  );
}

export default ListProductShop;
