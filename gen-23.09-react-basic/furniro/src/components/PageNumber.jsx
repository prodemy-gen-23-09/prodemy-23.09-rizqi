function PageNumber() {
  return (
    <div>
        <div className="flex justify-center items-center my-14 gap-10">
        <button
          className="bg-color1_selected w-12 h-14 text-center flex items-center justify-center rounded-md"
        >
          <p>1</p>
        </button>
        <button
          className="bg-color1 w-12 h-14 text-center flex items-center justify-center rounded-md"
        >
          <p>2</p>
        </button>
        <button
          className="bg-color1 w-12 h-14 text-center flex items-center justify-center rounded-md"
        >
          <p>3</p>
        </button>
        <button
          className="bg-color1 w-12 h-14 text-center flex items-center justify-center rounded-md"
        >
          <p>Next</p>
        </button>
      </div>
    </div>
  )
}

export default PageNumber