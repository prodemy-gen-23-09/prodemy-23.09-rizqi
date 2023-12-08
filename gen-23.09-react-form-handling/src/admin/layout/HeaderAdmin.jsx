import { CiSearch, CiHeart } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

function HeaderAdmin() {
  return (
    <div>
      <header>
        <nav className="flex font-medium bg-white justify-between mt-2  h-20 sticky top-0 items-center mx-[54px] p-[10px]">
          <Link to="/admin">
            <img
              src="/src/assets/logo.png"
              alt="imglogo"
              className="m-5 w-52"
            />
          </Link>
          <div className="flex gap-20 cursor-pointer">
            <Link to="/admin">
              <div className="text-black hover:text-color1_selected">Home</div>
            </Link>
          </div>
          <div className="flex m-5 gap-5">
            <CiSearch size={30} />
            <MdPerson size={30} />
            <Link to="wishlist">
              <CiHeart size={30} />
            </Link>
            <Link to="cart">
              <IoCartSharp size={30} className="cursor-pointer" />
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default HeaderAdmin;
