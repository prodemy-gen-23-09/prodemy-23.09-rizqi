import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes() {
  const isAdmin = useSelector((state) => state.auth.user.roles !== "admin");

  if (isAdmin) {
    alert("Only Admin can access this page");
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
