function open_cart(){
    document.querySelector("#my-cart").style.display = "block" ;
  }
  function close_cart(){
    document.querySelector("#my-cart").style.display = "none" ;
  }
  function addToCart() {
    var mainImgSrc = document.getElementById("MainImg").src;
    var productName = document.querySelector(".single-pro-details h4").textContent;
    var productPrice = document.querySelector(".single-pro-details h3").textContent;

    var table = document.getElementById("table-data");
    var newRow = table.insertRow(table.rows.length);
    
    var imageCell = newRow.insertCell(0);
    var nameCell = newRow.insertCell(1);
    var removeCell = newRow.insertCell(2);
    var priceCell = newRow.insertCell(3);

    var productImage = document.createElement("img");
    productImage.src = mainImgSrc;
    productImage.width = '100';
    imageCell.appendChild(productImage);

    nameCell.textContent = productName;
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        table.deleteRow(newRow.rowIndex);
    };
    removeCell.appendChild(removeButton);
    priceCell.textContent = productPrice;

    calculateTotalPrice();
}

function calculateTotalPrice() {
    var priceCells = document.querySelectorAll("#table-data tr td:nth-child(4)");
    var totalPrice = 0;

    priceCells.forEach(function(priceCell) {
        var price = parseFloat(priceCell.textContent);
        totalPrice += price;
    });

    document.getElementById("total-price").textContent = "Total: " + totalPrice;
}

var addToCartButton = document.querySelector(".normal");
addToCartButton.addEventListener("click", addToCart);