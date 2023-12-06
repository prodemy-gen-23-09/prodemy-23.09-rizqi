// const searchProduct = async () =>  {
//   var searchTerm = document.getElementById("searchInput").value;

//   var apiUrl = "https://dummyjson.com/products/search?q=" + searchTerm;

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// const searchProduct = async () => {
//   var searchTerm = document.getElementById("searchInput").value;
//   let url = "https://dummyjson.com/products/search?q=" + searchTerm;

//   axios
//     .get(url)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

const searchProduct = async () => {
  try {
    var searchTerm = document.getElementById("searchInput").value;
    var apiUrl = "https://dummyjson.com/products/search?q=" + searchTerm;

    const response = await axios.get(apiUrl);

    document.getElementById("productTitleList").innerHTML = "";

    const productTitleList = document.getElementById("productTitleList");

    console.log(response.data.products); //Hasil Di Console

    response.data.products.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.textContent = product.title;
      productTitleList.appendChild(listItem);
    });
  } catch (error) {
    console.error(error);
  }
};

document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchProduct();
    }
  });
