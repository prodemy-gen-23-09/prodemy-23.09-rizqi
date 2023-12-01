/* eslint-disable react/prop-types */
function ImageThumbnail(props) {
  const handleImageClick = (image) => {
    props.onThumbnailClick(image);
  };
  return (
    <>
      <div className="bg-color1 w-32 h-28 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        onClick={() => handleImageClick(props.image1)}>
        <img src={props.image1} alt="imgproduct5" id="mainImage2" />
      </div>
      <div className="bg-color1 w-32 h-28 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        onClick={() => handleImageClick("/src/assets/detailproduct/sofa1.png")}
      >
        <img src="/src/assets/detailproduct/sofa1.png" alt="imgproduct1" />
      </div>
      <div className="bg-color1 w-32 h-28 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        onClick={() => handleImageClick("/src/assets/detailproduct/sofa2.png")}
      >
        <img src="/src/assets/detailproduct/sofa2.png" alt="imgproduct2" />
      </div>
      <div className="bg-color1 w-32 h-28 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        onClick={() => handleImageClick("/src/assets/detailproduct/sofa3.png")}>
        <img src="/src/assets/detailproduct/sofa3.png" alt="imgproduct3" />
      </div>
      <div className="bg-color1 w-32 h-28 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        onClick={() => handleImageClick("/src/assets/detailproduct/sofa4.png")}>
        <img src="/src/assets/detailproduct/sofa4.png" alt="imgproduct4" />
      </div>
    </>
  );
}

export default ImageThumbnail;
