// Write your code below:
const mainHeading = document.querySelector("#main-heading");

const subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";

subHeading.style.fontStyle = "italic";

mainHeading.insertAdjacentElement("afterend", subHeading);

const fruitList = document.querySelector(".fruits");

const para = document.createElement("p");
para.textContent = "Total fruits: 4";

para.id = "fruits-total";
fruitList.insertAdjacentElement("beforebegin", para);
