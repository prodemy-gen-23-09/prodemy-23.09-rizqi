function FilterAndSort() {
  return (
    <div>
      <div className="bg-color1 justify-between items-center flex w-auto h-16">
        <div className="function-tools flex items-center mx-24">
          <img
            src="/src/assets/shop/filter.png"
            alt="filter"
            className="mr-10 max-w-8 max-h-8"
          />
          <p className="mr-10">Filters</p>
          <img
            src="/src/assets/shop/grid.png"
            alt="grid"
            className="mr-10 max-w-8 max-h-8"
          />
          <img
            src="/src/assets/shop/viewlist.png"
            alt="viewlist"
            className="mr-10 max-w-8 max-h-8"
          />
          <img
            src="/src/assets/shop/line.png"
            alt="line"
            className="mr-10 max-w-8 max-h-8"
          />
          <p>Showing 1-16 of 32 results</p>
        </div>
        <div className="px-88 function-tools-filter flex items-center mx-24">
          <p className="mr-2">Show</p>
          <input
            type="text"
            name="inputData"
            id="inputData"
            placeholder="16"
            className="mr-8 w-40 h-8"
          />
          <p className="mr-2">Sort By</p>
          <input
            type="text"
            name="inputData"
            id="inputData"
            placeholder="Default"
            className="w-40 h-8 rounde-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default FilterAndSort;
