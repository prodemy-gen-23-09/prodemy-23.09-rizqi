import { useParams, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

function DetailProduct(product) {
  const { id } = useParams();
  const location = useLocation();

  console.log('Location State:', location.state);
  console.log('Product ID:', id);
  console.log('Product Data:', product);

  return (
    <div>
      <Breadcrumb />
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.desc}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
        </div>
      ) : (
        <p>No product data found.</p>
      )}
    </div>
  );
}

export default DetailProduct;