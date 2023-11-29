const readline = require('readline');

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


// Tugas 2
function updateProduct() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Masukkan ID produk yang ingin diubah: ', (productId) => {
      const product = FurnitureProduct.find(p => p.id === parseInt(productId));
  
      if (!product) {
        console.log('Produk tidak ditemukan.');
        rl.close();
        return;
      }
  
      rl.question('Masukkan nama properti yang ingin diubah: ', (propertyName) => {
        rl.question(`Masukkan nilai baru untuk properti '${propertyName}': `, (propertyValue) => {
          product[propertyName] = propertyValue;
  
          console.log('Objek setelah diubah:', FurnitureProduct);
  
          rl.close();
        });
      });
    });
  }

updateProduct(); 