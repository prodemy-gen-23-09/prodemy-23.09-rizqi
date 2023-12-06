document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchProduct();
    }
  });

function searchProduct() {
  var searchTerm = document.getElementById("searchInput").value;

  var apiUrl = "https://dummyjson.com/products/search?q=" + searchTerm;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
