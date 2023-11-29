import BannerImage from "./components/BannerImage.jsx";
import FilterAndSort from "./components/FilterAndSort.jsx";
import BannerService from "./components/BannerService.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import ListProduct from "./layout/ListProduct";

function App() {
  return (
    <div>
      <Header />
      <BannerImage />
      <FilterAndSort />
      <ListProduct/>
      <BannerService />
      <Footer />
    </div>
  );
}

export default App;
