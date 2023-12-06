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

const searchProduct = async () => {
  try {
    var searchTerm = document.getElementById("searchInput").value;
    var url = "https://dummyjson.com/products/search?q=" + searchTerm;
    const response = await axios.get(url);
    const productTitleList = document.getElementById("productTitleList");

    axios.get(url).then((response) => {
      console.log(response.data);
    });
    document.getElementById("productTitleList").innerHTML = "";

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
