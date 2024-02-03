// instantiate localstorage
// Define the array of objects
var todoList = [
  {
    id: 1,
    task: "Phil",
    dateAdded: new Date(),
    urgency: "high",
    dateDue: new Date("2024-2-3"),
    done: false,
  },
  {
    id: 2,
    task: "Phil",
    dateAdded: new Date(),
    urgency: "high",
    dateDue: new Date("2024-2-3"),
    done: false,
  },
];

// Convert the array to a JSON string and store it in localStorage
localStorage.setItem("todo_list", JSON.stringify(todoList));

// Retrieve the JSON string from localStorage and parse it back to an array
var tempList = JSON.parse(localStorage.getItem("todo_list"));

// Access the properties of the objects in the array
console.log("tempList: ", tempList); // Outputs: "Phil"

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

// get form:
let form = document.getElementById("form");
// destructure form fields:
const { string } = form;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked submit: ", string.name);
});

// Retrieve the list element
let list = document.getElementById("list"); // Assuming there's only one element with the class "list"

console.log("list: ", list);

let displayList = JSON.parse(localStorage.getItem("todo_list"));

console.log("displayList: ", displayList);

displayList.forEach((item) => {
  // Create a new table row
  let newItem = document.createElement("tr");

  // Create and append table cells
  let idCell = document.createElement("td");
  idCell.textContent = item.id;
  newItem.appendChild(idCell);

  let taskCell = document.createElement("td");
  taskCell.textContent = item.task;
  newItem.appendChild(taskCell);

  let dateAddedCell = document.createElement("td");
  dateAddedCell.textContent = item.dateAdded;
  newItem.appendChild(dateAddedCell);

  let urgencyCell = document.createElement("td");
  urgencyCell.textContent = item.urgency;
  newItem.appendChild(urgencyCell);

  let dateDueCell = document.createElement("td");
  dateDueCell.textContent = item.dateDue;
  newItem.appendChild(dateDueCell);

  // Append the new table row to the table
  list.appendChild(newItem);
});
