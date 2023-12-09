import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "../src/pages/Shop";
import HeaderFooter from "./pages/HeaderFooter";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import HeaderFooterAdmin from "./admin/layout/HeaderFooterAdmin";
import HomeAdmin from "./admin/pages/HomeAdmin";
import PromptDelete from "./admin/components/PromptDelete";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detailproduct/:id/:name" element={<DetailProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<HeaderFooterAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="delete" element={<PromptDelete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
