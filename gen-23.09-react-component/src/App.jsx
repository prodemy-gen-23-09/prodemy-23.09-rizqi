import BannerImage from "./components/BannerImage.jsx";
import FilterAndSort from "./components/FilterAndSort.jsx";
import BannerService from "./components/BannerService.jsx";
import ListProduct from "./layout/ListProduct";

function App() {
  return (
    <div>
      <BannerImage />
      <FilterAndSort />
      <ListProduct/>
      <BannerService />
    </div>
  );
}

export default App;
