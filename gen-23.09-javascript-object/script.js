const FurnitureProduct = [
    {
        id : 1,
        name : "Asgaard Sofa",
        price : 2500000,
        description : "Stylish cafe chair"
    },
    {
        id : 2,
        name : "Leviosa",
        price : 7500000,
        description : "Stylish cafe table"
    },
    {
        id : 3,
        name : "Lolito",
        price : 12500000,
        description : "Luxury big sofa"
    },
    {
        id : 4,
        name : "Respira",
        price : 500000,
        description : "Outdoor bar table and stool"
    },
    {
        id : 5,
        name : "Grifo",
        price : 750000,
        description : "Night Lamp"
    },
    {
        id : 6,
        name : "Muggo",
        price : 150000,
        description : "Small Mug"
    },
    {
        id : 7,
        name : "Pingky",
        price : 8500000,
        description : "Cute bed"
    },
    {
        id : 8,
        name : "Potty",
        price : 500000,
        description : "Stylish cafe chair"
    }
]

const filteredFurnitureProduct = FurnitureProduct.filter(FurnitureProduct => FurnitureProduct.price > 2500000);
const result = filteredFurnitureProduct.map(FurnitureProduct => FurnitureProduct.price);
console.log(result)