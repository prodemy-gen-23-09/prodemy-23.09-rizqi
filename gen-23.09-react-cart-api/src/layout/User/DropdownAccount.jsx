/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAuthData } from "../../store/reducers/authSlice";

export default function DropdownAccount({ title }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const handleLogout = () => {
    dispatch(resetAuthData());
    navigate("/login");
  };
  const handleAdmin = () => {
    navigate("/admin");
  };
  return (
    <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="m-1">
          Hi, {title}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Help</a>
          </li>
          {user && user.roles === "admin" && (
            <li>
              <a onClick={handleAdmin}>Admin</a>{" "}
            </li>
          )}
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}
