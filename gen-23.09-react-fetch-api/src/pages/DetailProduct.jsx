import Breadcrumb from "../components/Shop/Breadcrumb";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageThumbnail from "../components/DetailProduct/ImageThumbnail";
import ProductContent from "../components/DetailProduct/ProductContent";
import Information from "../components/DetailProduct/Information";
import OverlayImage from "../components/Modals/OverlayImage";
import { getAllProduct } from "../service/api";

function DetailProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [detailProducts, setDetailProducts] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [isModalImageOpen, setModalImageOpen] = useState(false);

  const data = async () => {
    try {
      const result = await getAllProduct();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useState(() => {
    data();
  }, []);

  useEffect(() => {
    const detail = products.find((p) => p.id === parseInt(id));
    setDetailProducts(detail || null);
    setMainImage(detail?.thumbnail || "");
  }, [id, products]);

  const openModalImage = () => {
    setModalImageOpen(true);
  };

  const closeModal = () => {
    setModalImageOpen(false);
  };

  const handleThumbnailClick = (newImage) => {
    setMainImage(newImage);
  };

  if (!detailProducts) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Breadcrumb title={detailProducts.title} />
      <div className="flex bg-white mt-8 mb-10">
        <div className="flex flex-col gap-10 ml-24">
          <ImageThumbnail
            image={detailProducts.thumbnail}
            onThumbnailClick={handleThumbnailClick}
          />
        </div>
        <div className="flex mx-24">
          <div
            className="bg-color1 w-96 h-80 rounded-lg transition ease-in-out delay-150 hover:scale-150 duration-200"
            onClick={openModalImage}
          >
            <img src={mainImage} alt="imgproductMain" id="mainImage" />
          </div>
        </div>
        <ProductContent
          title={detailProducts.title}
          price={detailProducts.price}
          desc={detailProducts.desc}
          category={detailProducts.category}
          date={detailProducts.release_date}
        />
      </div>
      <hr />
      <Information
        image1={detailProducts.thumbnail}
        image2={detailProducts.thumbnail}
      />
      <hr />
      {isModalImageOpen && (
        <OverlayImage closeModal={closeModal} image={mainImage} />
      )}
    </>
  );
}

export default DetailProduct;
