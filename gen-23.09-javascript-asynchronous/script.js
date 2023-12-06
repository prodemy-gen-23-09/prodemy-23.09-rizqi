// function searchProduct() {
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

function searchProduct() {
  var searchTerm = document.getElementById("searchInput").value;
  let url = "https://dummyjson.com/products/search?q=" + searchTerm;

  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchProduct();
    }
  });
