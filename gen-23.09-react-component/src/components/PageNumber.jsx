/* eslint-disable react/prop-types */
function PageNumber(props) {
  return (
    <div>
      <button className="bg-color1 hover:bg-color1_selected duration-1000 w-12 h-14 text-center flex items-center justify-center rounded-md">
        <p>{props.pageNumber}</p>
      </button>
    </div>
  );
}

export default PageNumber;
