const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit World";

mainHeading.style.color = "orange";

const header = document.getElementById("header");
header.style.background = "green";

header.style.borderBottom = "5px solid orange";

const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

const thanksDiv = document.getElementById("thanks");
const para = document.createElement("p");
para.textContent = "Please visit us again";
thanksDiv.appendChild(para);
