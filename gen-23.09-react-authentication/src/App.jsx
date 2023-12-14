import { Routes, Route } from "react-router-dom";
import Shop from "../src/pages/User/Shop";
import Layout from "./pages/User/Layout";
import Homepage from "./pages/User/Homepage";
import About from "./pages/User/About";
import Contact from "./pages/User/Contact";
import DetailProduct from "./pages/User/DetailProduct";
import Cart from "./pages/User/Cart/Cart";
import Wishlist from "./pages/User/Wishlist";
import NotFound from "./pages/User/NotFound";
import HeaderFooterAdmin from "./pages/Admin/layout/HeaderFooterAdmin";
import HomeAdmin from "./pages/Admin/pages/HomeAdmin";
import PromptDelete from "./pages/Admin/components/PromptDelete";
import Login from "./pages/Login";
import GuestRoutes from "./routes/GuestRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detailproduct/:id/:name" element={<DetailProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/admin" element={<HeaderFooterAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="delete" element={<PromptDelete />} />
        </Route>
      </Route>
      <Route element={<GuestRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
