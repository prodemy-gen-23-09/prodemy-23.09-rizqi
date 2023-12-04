function Dropdown() {
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
          <a>Price : Low To High</a>
        </li>
        <li>
          <a>Price : High To Low</a>
        </li>
        <li>
          <a>Newest Products</a>
        </li>
        <li>
          <a>Oldest Products</a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
