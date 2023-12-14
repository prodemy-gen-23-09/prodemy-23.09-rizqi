function ButtonWishlist() {
  return (
    <>
      <button
        className="transition ease-in-out delay-150 hover:bg-color1_selected hover:-translate-y-1 hover:scale-110 duration-300 h-16 w-48 rounded-3xl cursor-pointer border-2 border-black"
        onClick={() => console.log("Add to Wishlist")}
      >
        <span className="m-auto text-xl font-thin">Add To Wishlist</span>
      </button>
    </>
  );
}

export default ButtonWishlist;
