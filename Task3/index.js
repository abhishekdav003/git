// Write your code below:
const items = document.getElementsByTagName("li");

items[4].style.color = "red";

for (let i = 0; i < items.length; i++) {
  items[i].style.fontStyle = "italic";
}
