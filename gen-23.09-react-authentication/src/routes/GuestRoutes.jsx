import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoutes() {
  const isLogin = useSelector((state) => state.auth.token !== "");

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
