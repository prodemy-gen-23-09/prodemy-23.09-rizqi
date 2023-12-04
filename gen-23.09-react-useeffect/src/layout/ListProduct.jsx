/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";
function ListProduct({ products }) {
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
                price={product.price}
              />
            </Link>
          </div>
        ))}
    </>
  );
}

export default ListProduct;
