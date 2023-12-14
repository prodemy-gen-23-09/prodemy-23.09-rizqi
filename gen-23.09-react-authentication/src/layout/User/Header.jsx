/* eslint-disable react/prop-types */
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAuthData } from "../../store/reducers/authSlice";

function Header() {
  const { items } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetAuthData());
    navigate("/login");
  };

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
            <Link to="wishlist">
              <CiHeart size={30} />
            </Link>
            <div className="relative">
              {items.length > 0 && (
                <span className="absolute bottom-3 left-5 bg-red-500 text-white px-2 py-1 text-[9px] rounded-full">
                  {items.length}
                </span>
              )}
              <Link to="cart" className="flex">
                <IoCartSharp size={30} className="cursor-pointer" />
              </Link>
            </div>
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="">
                  {user.username}
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Log Out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
