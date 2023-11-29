import Card from "./components/Card";
import PageNumber from "./components/PageNumber";

function App() {
  const FurnitureProducts = [
    {
      id: 1,
      image: "/src/assets/shop/product1.png",
      title: "Syltherine",
      desc: "Stylish cafe table",
      price: "Rp 2.500.000",
      category : "table"
    },
    {
      id: 2,
      image: "/src/assets/shop/product2.png",
      title: "Asgard Sofa",
      desc: "Stylish sofa",
      price: "Rp 2.500.000",
      category : "sofa"
    },
    {
      id: 3,
      image: "/src/assets/shop/product3.png",
      title: "Potty",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      category : "chair"
    },
    {
      id: 4,
      image: "/src/assets/shop/product4.png",
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      category : "chair"
    },
    {
      id: 5,
      image: "/src/assets/shop/product5.png",
      title: "Lolito",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      category : "chair"
    },
    {
      id: 6,
      image: "/src/assets/shop/product6.png",
      title: "Leviosa",
      desc: "Stylish sofa",
      price: "Rp 2.500.000",
      category : "sofa"
    },
    {
      id: 7,
      image: "/src/assets/shop/product7.png",
      title: "Flowy",
      desc: "Stylish Flower Decoration",
      price: "Rp 2.500.000",
      category : "decoration"
    },
    {
      id: 8,
      image: "/src/assets/shop/product8.png",
      title: "Muggo",
      desc: "Stylish Mug",
      price: "Rp 2.500.000",
      category : "kitchen"
    },
  ];
  console.log(FurnitureProducts)
  return (
    <div>
      <div className="grid grid-cols-4">
      {FurnitureProducts.map(product => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            desc={product.desc}
            price={product.price}
          />
        ))}
      </div>
      <div className="flex justify-center items-center my-14 gap-10">
        <PageNumber pageNumber="1" />
        <PageNumber pageNumber="2" />
        <PageNumber pageNumber="3" />
        <PageNumber pageNumber="Next" />
      </div>
    </div>
  );
}

export default App;
