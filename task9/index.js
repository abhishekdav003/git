let form = document.getElementsByTagName("form")[0];

// Task 1: Use DOM Manipulation to add another input element inside form, before the button.
// This input element will take the description of the fruit.
// Create an input element, give it id="description", type="text", and placeholder text like "Enter fruit description".
// Then insert it before the button inside the form.

const descInput = document.createElement("input");
descInput.type = "text";
descInput.id = "description";
descInput.placeholder = "Enter fruit description";

const button = form.querySelector("button");
form.insertBefore(descInput, button);

// add fruit to the cart
let fruititems = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let fruitName = document.getElementById("fruit-to-add").value.trim();
  let fruitDescription = document.getElementById("description").value.trim();

  if (fruitName === "" || fruitDescription === "") {
    alert("please enter both fruit name and description.");
    return;
  }

  let li = document.createElement("li");
  li.className = "fruit";

  let nameText = document.createTextNode(fruitName);

  let descPara = document.createElement("p");
  descPara.textContent = fruitDescription;
  descPara.style.fontStyle = "italic";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "x";

  li.appendChild(nameText);
  li.appendChild(descPara);
  li.appendChild(deleteBtn);

  fruititems.appendChild(li);

  document.getElementsById("fruit-to-add").value = "";
  document.getElementsById("description").value = "";
});
// let descriptionitems = document.querySelector('#description');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Ensure that a description is provided
//     let fruitDescription = document.getElementById('description').value;
//     if (fruitDescription === '') {
//         alert('Please enter a description.');
//         return;
//     }

//     // Task 2: Add code to show fruit name and description.
//     // Create a new <li> element and add fruit name + description (in a <p> tag).
//     // Show the description in italics.
//     // Add a delete button at the end.
//     // Append the new li element to the fruit list.

//     // Clear input fields
//     document.getElementById('fruit-to-add').value = '';
//     document.getElementById('description').value = '';
// });

// delete functionality
fruititems.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    let buttontodelete = event.target.parentElement;
    fruititems.removeChild(buttontodelete);
  }
});

// Task 3: Create a filter that shows only those fruits whose
// either name or description or both matches the entered text.

// HINT: Check both the fruit name and the description (<p> tag)
// If either includes the entered text, show it; otherwise, hide it.
let filter = document.getElementById("filter");

filter.addEventListener("keyup", function () {
  let text = filter.value.toLowerCase();

  let items = document.querySelectorAll(".fruit");

  items.forEach(function (item) {
    let fruitName = item.firstChild.textContent.toLowerCase();

    let desc = item.querySelector("p");
    let description = desc ? desc.textContent.toLowerCase() : "";

    if (fruitName.includes(text) || description.includes(text)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
