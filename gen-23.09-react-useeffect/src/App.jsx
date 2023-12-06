import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "../src/pages/Shop";
import HeaderFooter from "./pages/HeaderFooter";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detailproduct/:id/:name" element={<DetailProduct />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
