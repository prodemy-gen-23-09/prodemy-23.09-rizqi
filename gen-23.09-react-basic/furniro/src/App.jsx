import Card from "./components/Card";
import PageNumber from "./components/PageNumber";

function App() {
  return (
    <div>
      <div className="grid grid-cols-4">
        <Card
          id="1"
          image="/src/assets/shop/product1.png"
          title="Asgard Sofa"
          desc="Stylish cafe chair"
          price="Rp 2.500.000"
        />
        <Card
          id="2"
          image="/src/assets/shop/product2.png"
          title="Asgard Sofa"
          desc="Stylish cafe chair"
          price="Rp 2.500.000"
        />
        <Card
          id="3"
          image="/src/assets/shop/product3.png"
          title="Asgard Sofa"
          desc="Stylish cafe chair"
          price="Rp 2.500.000"
        />
        <Card
          id="4"
          image="/src/assets/shop/product4.png"
          title="Asgard Sofa"
          desc="Stylish cafe chair"
          price="Rp 2.500.000"
        />
        <Card
          id="5"
          image="/src/assets/shop/product5.png"
          title="Asgard Sofa"
          desc="Stylish cafe chair"
          price="Rp 2.500.000"
        />
        <Card
          id="6"
          image="/src/assets/shop/product6.png"
          title="Asgard Sofa"
          desc="Stylish cafe chair"
          price="Rp 2.500.000"
        />
        <Card
          id="7"
          image="/src/assets/shop/product7.png"
          title="Asgard Sofa"
          desc="Stylish cafe chair"
          price="Rp 2.500.000"
        />
        <Card
          id="8"
          image="/src/assets/shop/product8.png"
          title="Asgard Sofa"
          desc="Stylish cafe chair"
          price="Rp 2.500.000"
        />
      </div>
      <div className="flex justify-center items-center my-14 gap-10">
        <PageNumber pageNumber="1"/>
        <PageNumber pageNumber="2"/>
        <PageNumber pageNumber="3"/>
        <PageNumber pageNumber="Next"/>
      </div>
    </div>
  );
}

export default App;
