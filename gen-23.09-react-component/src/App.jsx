import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "../src/pages/Shop";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailProduct from "./pages/DetailProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detailproduct/:id" element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

