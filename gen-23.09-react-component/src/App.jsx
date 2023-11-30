import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "../src/pages/Shop";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

