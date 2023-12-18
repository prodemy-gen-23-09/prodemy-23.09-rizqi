/* eslint-disable react/prop-types */
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import DropdownAccount from "./DropdownAccount";

function Header() {
  const user = useSelector((state) => state.auth.user);

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
            <div className="flex gap-5">
              <CiSearch size={30} />
              <Link to="wishlist">
                <CiHeart size={30} />
              </Link>
              <div className="relative">
                {user.length > 0 && (
                  <span className="absolute bottom-3 left-5 bg-red-500 text-white px-2 py-1 text-[9px] rounded-full">
                    {user.length}
                  </span>
                )}
                <Link to={`/cart/${user.id}`} className="flex">
                  <IoCartSharp size={30} className="cursor-pointer" />
                </Link>
              </div>
              <DropdownAccount title={user.username} />
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;