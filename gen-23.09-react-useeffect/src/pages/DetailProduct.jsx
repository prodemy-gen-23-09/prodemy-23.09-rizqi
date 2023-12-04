/* eslint-disable react/prop-types */
import Breadcrumb from "../components/Shop/Breadcrumb";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FurnitureProducts from "../data/data";
import ImageThumbnail from "../components/DetailProduct/ImageThumbnail";
import ProductContent from "../components/DetailProduct/ProductContent";
import Information from "../components/DetailProduct/Information";

function DetailProduct() {
  const { id } = useParams();
  const product = FurnitureProducts.find(
    (product) => product.id === parseInt(id)
  );
  const [mainImage, setMainImage] = useState(product.image);
  const handleThumbnailClick = (newImage) => {
    setMainImage(newImage);
  };
  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };
  return (
    <div>
      <Breadcrumb title={product.title} />
      <div className="flex bg-white mt-8 mb-10">
        <div className="flex flex-col gap-10 ml-24">
          <ImageThumbnail
            image={product.image}
            onThumbnailClick={handleThumbnailClick}
          />
        </div>
        <div className="flex mx-24">
          <div className="bg-color1 w-96 h-80 rounded-lg transition ease-in-out delay-150 hover:scale-150 duration-200">
            <img src={mainImage} alt="imgproductMain" id="mainImage" />
          </div>
        </div>
        <ProductContent
          title={product.title}
          price={formatPrice(product.price)}
          desc={product.desc}
          category={product.category}
        />
      </div>
      <hr />
      <Information image1={product.image} image2={product.image} />
      <hr />
    </div>
  );
}

export default DetailProduct;
