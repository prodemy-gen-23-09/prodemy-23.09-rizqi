function selectButton(buttonId) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.remove("bg-color_selected");
  });

  const selectedButton = document.getElementById(buttonId);
  selectedButton.classList.add("bg-color_selected");
}

function changeMainImage(newImagePath) {
  document.getElementById("mainImage").src = newImagePath;
}

var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get("id");
var productName = urlParams.get("name");
var productPrice = urlParams.get("price");
var productImage = urlParams.get("image");

document.getElementById("productName").innerText = productName;
document.getElementById("productPrice").innerText = productPrice;
document.getElementById("mainImage").src = productImage;
