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
              />
            </Link>
          </div>
        ))}
    </>
  );
}

export default ListProductShop;
