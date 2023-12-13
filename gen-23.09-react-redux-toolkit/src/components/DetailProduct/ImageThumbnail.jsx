/* eslint-disable react/prop-types */
function ImageThumbnail({ image, onThumbnailClick }) {
  const handleThumbnailClick = (clickedImage) => {
    onThumbnailClick(clickedImage);
  };

  return (
    <div className="flex flex-col gap-10">
      {image &&
        image.map((img, index) => (
          <div
            key={index}
            className="bg-color1 w-32 h-28 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            onClick={() => handleThumbnailClick(img)}
          >
            <img
              src={img}
              alt={`Product ${index + 1}`}
              className="product-image"
            />
          </div>
        ))}
    </div>
  );
}

export default ImageThumbnail;
