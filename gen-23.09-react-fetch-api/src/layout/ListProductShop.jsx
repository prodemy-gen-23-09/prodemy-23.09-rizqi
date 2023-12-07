/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
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
  return (
    <>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <Link to={{ pathname: `/detailproduct/${product.id}` }}>
              <CardProduct
                image={product.image}
                title={product.title}
                desc={product.category}
                price={formatPrice(product.price)}
                date={formatDate(product.release_date)}
              />
            </Link>
          </div>
        ))}
    </>
  );
}

export default ListProductShop;
