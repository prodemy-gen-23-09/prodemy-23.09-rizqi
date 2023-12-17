/* eslint-disable react/prop-types */
export default function Dropdown({ onSort }) {
  const handleSortClick = (sortOption) => {
    onSort(sortOption);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Sort By
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a onClick={() => handleSortClick("lowToHigh")}>
            Price : Low To High
          </a>
        </li>
        <li>
          <a onClick={() => handleSortClick("highToLow")}>
            Price : High To Low
          </a>
        </li>
        <li>
          <a onClick={() => handleSortClick("newest")}>Newest Products</a>
        </li>
        <li>
          <a onClick={() => handleSortClick("oldest")}>Oldest Products</a>
        </li>
      </ul>
    </div>
  );
}
