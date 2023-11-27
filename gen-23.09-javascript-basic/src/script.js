function redirectToProductDetail(productId, productName, productPrice,productImage) {
    var productDetailUrl = 'detail_product1.html?id=' + productId + '&name=' + encodeURIComponent(productName) + '&price=' + encodeURIComponent(productPrice) + '&image=' + encodeURIComponent(productImage);
    window.location.href = productDetailUrl;
  }