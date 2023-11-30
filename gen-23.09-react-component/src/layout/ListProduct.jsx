import Card from "../components/Card";

function ListProduct() {
  const FurnitureProducts = [
    {
      id: 1,
      image: "/src/assets/shop/product1.png",
      title: "Syltherine",
      desc: "Stylish cafe table",
      price: "Rp 2.500.000",
      category: "table",
    },
    {
      id: 2,
      image: "/src/assets/shop/product2.png",
      title: "Asgard Sofa",
      desc: "Stylish sofa",
      price: "Rp 2.500.000",
      category: "sofa",
    },
    {
      id: 3,
      image: "/src/assets/shop/product3.png",
      title: "Potty",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      category: "chair",
    },
    {
      id: 4,
      image: "/src/assets/shop/product4.png",
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      category: "chair",
    },
    {
      id: 5,
      image: "/src/assets/shop/product5.png",
      title: "Lolito",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      category: "chair",
    },
    {
      id: 6,
      image: "/src/assets/shop/product6.png",
      title: "Leviosa",
      desc: "Stylish sofa",
      price: "Rp 2.500.000",
      category: "sofa",
    },
    {
      id: 7,
      image: "/src/assets/shop/product7.png",
      title: "Flowy",
      desc: "Stylish Flower Decoration",
      price: "Rp 2.500.000",
      category: "decoration",
    },
    {
      id: 8,
      image: "/src/assets/shop/product8.png",
      title: "Muggo",
      desc: "Stylish Mug",
      price: "Rp 2.500.000",
      category: "kitchen",
    },
    {
      id: 9,
      image: "/src/assets/shop/product1.png",
      title: "Syltherine",
      desc: "Stylish cafe table",
      price: "Rp 2.500.000",
      category: "table",
    },
    {
      id: 10,
      image: "/src/assets/shop/product2.png",
      title: "Asgard Sofa",
      desc: "Stylish sofa",
      price: "Rp 2.500.000",
      category: "sofa",
    },
    {
      id: 11,
      image: "/src/assets/shop/product3.png",
      title: "Potty",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      category: "chair",
    },
    {
      id: 12,
      image: "/src/assets/shop/product4.png",
      title: "Respira",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      category: "chair",
    },
    {
      id: 13,
      image: "/src/assets/shop/product5.png",
      title: "Lolito",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      category: "chair",
    },
    {
      id: 14,
      image: "/src/assets/shop/product6.png",
      title: "Leviosa",
      desc: "Stylish sofa",
      price: "Rp 2.500.000",
      category: "sofa",
    },
    {
      id: 15,
      image: "/src/assets/shop/product7.png",
      title: "Flowy",
      desc: "Stylish Flower Decoration",
      price: "Rp 2.500.000",
      category: "decoration",
    },
    {
      id: 16,
      image: "/src/assets/shop/product8.png",
      title: "Muggo",
      desc: "Stylish Mug",
      price: "Rp 2.500.000",
      category: "kitchen",
    },
  ];
  return (
    <>
      {FurnitureProducts.map((product) => (
        <div key={product.id} onClick={() => console.log(product.title)}>
          <Card
            image={product.image}
            title={product.title}
            desc={product.desc}
            price={product.price}
          />
        </div>
      ))}
    </>
  );
}

export default ListProduct;
