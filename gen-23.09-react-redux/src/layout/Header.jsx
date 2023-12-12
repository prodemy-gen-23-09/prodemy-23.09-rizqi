import { CiSearch, CiHeart } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <nav className="flex font-medium bg-white justify-between mt-2  h-20 sticky top-0 items-center mx-[54px] p-[10px]">
          <Link to="/">
            <img
              src="/src/assets/logo.png"
              alt="imglogo"
              className="m-5 w-52"
            />
          </Link>
          <div className="flex gap-20 cursor-pointer">
            <Link to="/">
              <div className="text-black hover:text-color1_selected">Home</div>
            </Link>
            <Link to="/shop">
              <div className="text-black hover:text-color1_selected">Shop</div>
            </Link>
            <Link to="/about">
              <div className="text-black hover:text-color1_selected">About</div>
            </Link>
            <Link to="/contact">
              <div className="text-black hover:text-color1_selected">
                Contact
              </div>
            </Link>
          </div>
          <div className="flex m-5 gap-5">
            <CiSearch size={30} />
            <MdPerson size={30} />
            <Link to="wishlist">
              <CiHeart size={30} />
            </Link>
            <Link to="cart" className="flex">
              <IoCartSharp size={30} className="cursor-pointer" />
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
