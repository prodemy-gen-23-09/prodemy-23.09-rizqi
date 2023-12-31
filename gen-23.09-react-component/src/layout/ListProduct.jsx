import { Link } from "react-router-dom";
import Card from "../components/Card";
import FurnitureProducts from "../data/data"
function ListProduct() {
  return (
    <>
      {FurnitureProducts.map((product) => (
        <div key={product.id}>
        <Link to = {{pathname:`/detailproduct/${product.id}`, state :{product}}}>
          <Card
            image={product.image}
            title={product.title}
            desc={product.desc}
            price={product.price}
          />
          </Link>
        </div>
      ))}
    </>
  );
}

export default ListProduct;
