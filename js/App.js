var elForm = document.querySelector(".site-form");
var elSiteInput = document.querySelector(".inpt-scss");
var elSiteButton = document.querySelector(".btn-css");
var elSiteList = document.querySelector(".site-list");

var products = [];

elSiteButton.addEventListener("click", function(e){
    e.preventDefault();

    products.push(elSiteInput.value);

    elSiteList.textContent = ""

    for(var product of products) {
        var liElement = document.createElement("li");
        liElement.textContent = product;

        elSiteList.appendChild(liElement);
        elSiteInput.value = ""
    }
})