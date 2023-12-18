import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import DropdownAccount from "../User/DropdownAccount";

export default function HeaderAdmin() {
  const user = useSelector((state) => state.auth.user);

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
          <div className="flex gap-20 cursor-pointer mx-auto">
            <Link to="/admin">
              <div className="text-black hover:text-color1_selected">
                Product
              </div>
            </Link>
            <Link to="/admin/users">
              <div className="text-black hover:text-color1_selected">Users</div>
            </Link>
            <Link to="/admin/cart">
              <div className="text-black hover:text-color1_selected">Cart</div>
            </Link>
          </div>
          <DropdownAccount title={user.username} />
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
