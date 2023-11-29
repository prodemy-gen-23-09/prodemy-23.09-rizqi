const FurnitureProduct = [
    {
        id : 1,
        name : "Asgaard Sofa",
        price : 2500000,
        description : "Stylish cafe chair",
        category : "chair"
    },
    {
        id : 2,
        name : "Leviosa",
        price : 7500000,
        description : "Stylish cafe table",
        category : "table"
    },
    {
        id : 3,
        name : "Lolito",
        price : 12500000,
        description : "Luxury big sofa",
        category : "sofa"
    },
    {
        id : 4,
        name : "Respira",
        price : 500000,
        description : "Outdoor bar table and stool",
        category : "table"
    },
    {
        id : 5,
        name : "Grifo",
        price : 750000,
        description : "Night Lamp",
        category : "lamp"
    },
    {
        id : 6,
        name : "Muggo",
        price : 150000,
        description : "Small Mug",
        category : "mug"
    },
    {
        id : 7,
        name : "Pingky",
        price : 8500000,
        description : "Cute bed",
        category : "bed"
    },
    {
        id : 8,
        name : "Potty",
        price : 500000,
        description : "Stylish cafe chair",
        category : "chair"
    }
]

const filteredFurnitureProduct = FurnitureProduct.filter(FurnitureProduct => FurnitureProduct.price > 500000);
// const filteredFurnitureProduct = FurnitureProduct.filter(FurnitureProduct => FurnitureProduct.category === "chair");
const result = filteredFurnitureProduct.map(FurnitureProduct => FurnitureProduct.name);
console.log(result)

