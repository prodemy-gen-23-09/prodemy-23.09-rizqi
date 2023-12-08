import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";

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
          <Button onClick={() => console.log("Log Out")} title="Log Out" />
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default HeaderAdmin;
