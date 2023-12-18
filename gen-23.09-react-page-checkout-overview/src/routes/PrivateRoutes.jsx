import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const isNotLogin = useSelector((state) => state.auth.token === "");

  if (isNotLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
