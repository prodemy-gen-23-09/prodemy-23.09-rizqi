function redirectToProductDetail(
  productId,
  productName,
  productPrice,
  productImage,
  productDescription
) {
  var productDetailUrl =
    "detail_product.html?id=" +
    productId +
    "&name=" +
    encodeURIComponent(productName) +
    "&price=" +
    encodeURIComponent(productPrice) +
    "&image=" +
    encodeURIComponent(productImage) +
    "&desc=" +
    encodeURIComponent(productDescription);
  window.location.href = productDetailUrl;
}

function changeMainImage(newImagePath) {
  document.getElementById("mainImage").src = newImagePath;
}

function changeColor(button) {
  document.querySelectorAll(".button button").forEach(function (btn) {
    btn.classList.remove("bg-color_selected");
  });

  button.classList.add("bg-color_selected");
}

//Function Untuk GET Data Dari Halaman List Product
var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get("id");
var productName = urlParams.get("name");
var productPrice = urlParams.get("price");
var productImage = urlParams.get("image");
var productDescription = urlParams.get("desc");

document.getElementById("productName").innerText = productName;
document.getElementById("productPrice").innerText = productPrice;
document.getElementById("productDescription").innerText = productDescription;
document.getElementById("mainImage").src = productImage;
