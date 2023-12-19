import { Routes, Route, Navigate } from "react-router-dom";
import Shop from "../src/pages/User/Shop";
import Layout from "./pages/User/Layout";
import Homepage from "./pages/User/Homepage";
import About from "./pages/User/About";
import Contact from "./pages/User/Contact";
import DetailProduct from "./pages/User/DetailProduct";
import Cart from "./pages/User/Cart/Cart";
import Wishlist from "./pages/User/Wishlist";
import NotFound from "./pages/User/NotFound";
import HeaderFooterAdmin from "./layout/Admin/HeaderFooterAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import PromptDelete from "./components/Admin/PromptDelete";
import Login from "./pages/Login";
import GuestRoutes from "./routes/GuestRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detailproduct/:id/:name" element={<DetailProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart/:userId" element={<Cart />} />
          <Route path="/checkout/:userId" element={<Checkout />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Route>
        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<HeaderFooterAdmin />}>
            <Route index element={<HomeAdmin />} />
            <Route path="delete" element={<PromptDelete />} />
          </Route>
        </Route>
      </Route>
      <Route element={<GuestRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
