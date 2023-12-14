import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/Admin/Button";
import { useDispatch } from "react-redux";
import { resetAuthData } from "../../store/reducers/authSlice";

export default function HeaderAdmin() {
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
            <Link to="/admin/user">
              <div className="text-black hover:text-color1_selected">Users</div>
            </Link>
          </div>
          <Button onClick={handleLogout} title="Log Out" />
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
