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
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
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
              image={product.image}
              title={product.title}
              desc={product.category}
              price={formatPrice(product.price)}
              date={formatDate(product.release_date)}
              onClick={() => onClickCard(product.id, product.title)}
            />
          </div>
        ))}
    </>
  );
}

export default ListProductShop;
