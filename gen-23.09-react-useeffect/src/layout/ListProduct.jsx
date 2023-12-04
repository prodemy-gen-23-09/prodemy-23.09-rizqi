import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import FurnitureProducts from "../data/data"
function ListProduct() {
  return (
    <>
      {FurnitureProducts.map((product) => (
        <div key={product.id}>
        <Link to = {{pathname:`/detailproduct/${product.id}`}}>
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
