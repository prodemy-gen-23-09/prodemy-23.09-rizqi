import CardCategory from "../../components/User/CardCategory";

function ListCategory() {
  const Category = [
    {
      id: 1,
      title: "Dining",
      image: "/src/assets/category1.png",
    },
    {
      id: 2,
      title: "Living",
      image: "/src/assets/category2.png",
    },
    {
      id: 3,
      title: "Bedroom",
      image: "/src/assets/category3.png",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3">
        {Category.map((cat) => (
          <CardCategory key={cat.id} title={cat.title} image={cat.image} />
        ))}
      </div>
    </div>
  );
}

export default ListCategory;
