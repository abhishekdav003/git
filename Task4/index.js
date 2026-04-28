// Write the code as shown in the video below:

// Write answer to the questions asked below:
const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";

const fruits = document.querySelectorAll(".fruit");

for (let i = 1; i < fruits.length; i++) {
  fruits[i].style.backgroundColor = "red";
  fruits[i].style.color = "white";
}

const secondItem = document.querySelector(".fruit:nth-child(2)");
secondItem.style.backgroundColor = "brown";
secondItem.style.color = "white";

const fourthItem = document.querySelector(".fruit:nth-child(4)");

fourthItem.style.backgroundColor = "brown";
fourthItem.style.color = "white";

const fruitList = document.querySelector(".fruits");
fruitList.style.listStyleType = "none";
