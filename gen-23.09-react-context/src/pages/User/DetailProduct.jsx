/* eslint-disable no-unused-vars */
import Breadcrumb from "../../components/Shop/Breadcrumb";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageThumbnail from "../../components/DetailProduct/ImageThumbnail";
import ProductContent from "../../components/DetailProduct/ProductContent";
import Information from "../../components/DetailProduct/Information";
import OverlayImage from "../../components/Modals/OverlayImage";
import { PacmanLoader } from "react-spinners";
import axios from "axios";
import useSWR from "swr";

function DetailProduct() {
  const { id } = useParams();
  const [detailProducts, setDetailProducts] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [isModalImageOpen, setModalImageOpen] = useState(false);

  const getProduct = (url) =>
    axios
      .get(url, { headers: { "Cache-Control": "no-cache" } })
      .then((response) => response.data);
  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/products",
    getProduct,
    {
      onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
    }
  );

  useEffect(() => {
    const detail = data?.find((p) => p.id === parseInt(id));
    setDetailProducts(detail || null);
    setMainImage(detail?.thumbnail || "");
  }, [id, data]);

  const openModalImage = () => {
    setModalImageOpen(true);
  };

  const closeModal = () => {
    setModalImageOpen(false);
  };

  const handleThumbnailClick = (newImage) => {
    setMainImage(newImage);
  };

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  if (!detailProducts) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PacmanLoader color="#B88E2F" />
      </div>
    );
  }
  return (
    <>
      <Breadcrumb title={detailProducts.title} />
      <div className="flex bg-white mt-8 mb-10">
        <div className="ml-24">
          <ImageThumbnail
            image={detailProducts.image}
            thumbnail={detailProducts.thumbnail}
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
          price={formatPrice(detailProducts.price)}
          desc={detailProducts.desc}
          category={detailProducts.category}
          date={detailProducts.release_date}
          id={detailProducts.id}
          priceproduct={detailProducts.price}
          imageproduct={detailProducts.thumbnail}
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
