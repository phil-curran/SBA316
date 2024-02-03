// instantiate localstorage
localStorage.setItem("todo_list", [1, 2, 3]);

// create temp variable based on what exists in localstorage
var tempList = localStorage.todo_list.split(",");
console.log("tempList: ", tempList[2]);

// // test content to add
// let temp = [1, 2, 3];

// // push test content to temp array
// tempList.push(...temp);

// // check test array
// console.log("check test array: ", tempList);

// // push temp array to localstorage
// localStorage.todo_list = tempList;

// // // check localstorage
// let derp = localStorage.getItem("todo_list").split(",");

// console.log("derp array: ", derp[2]);

// // get form:
// let form = document.getElementById("form");
// // destructure form fields:
// const { string } = form;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("clicked submit: ", string.name);
// });

// // Retrieve the list element
// let list = document.getElementById("list"); // Assuming there's only one element with the class "list"

// console.log("list: ", list);

// // Create a new list item element
// let newItem = document.createElement("li");

// // // Set the text or content of the list item
// newItem.textContent = "New Item"; // Change "New Item" to whatever text you want for the new item

// // // Append the new list item to the list element
// list.appendChild(newItem);

// let displayList = localStorage.getItem("todo_list");

// console.log("displayList: ", displayList);

// displayList.forEach((item) => {
//   let newItem = document.createElement("li");
//   newItem.textContent = item;
//   list.appendChild(newItem);
// });
