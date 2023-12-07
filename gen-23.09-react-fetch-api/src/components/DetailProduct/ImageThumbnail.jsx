/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function ImageThumbnail(props) {
  const handleImageClick = (image) => {
    props.onThumbnailClick(image);
  };
  return (
    <>
      <div
        className="bg-color1 w-32 h-28 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        onClick={() => handleImageClick(props.image)}
      >
        <img src={props.image} alt="imgproduct5" id="mainImage2" />
      </div>
    </>
  );
}

export default ImageThumbnail;
