// // // push test content to temp array
// tempList.push(temp);

// // // check test array
// console.log("check test array: ", tempList);

// // // push temp array to localstorage
// localStorage.setItem("todo_list", JSON.stringify(tempList));

// var updatedTempList = JSON.parse(localStorage.getItem("todo_list"));
// console.log("updated temp list: ", updatedTempList);

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

// let displayList = JSON.parse(localStorage.getItem("todo_list"));

// console.log("displayList: ", displayList);

// displayList.forEach((item) => {
//   if (item.id > 0) {
//     // Create a new table row
//     let newItem = document.createElement("tr");

//     // Create and append table cells
//     let idCell = document.createElement("td");
//     idCell.textContent = item.id;
//     newItem.appendChild(idCell);

//     let taskCell = document.createElement("td");
//     taskCell.textContent = item.task;
//     newItem.appendChild(taskCell);

//     let dateAddedCell = document.createElement("td");
//     dateAddedCell.textContent = item.dateAdded;
//     newItem.appendChild(dateAddedCell);

//     let urgencyCell = document.createElement("td");
//     urgencyCell.textContent = item.urgency;
//     newItem.appendChild(urgencyCell);

//     let dateDueCell = document.createElement("td");
//     dateDueCell.textContent = item.dateDue;
//     newItem.appendChild(dateDueCell);

//     // Append the new table row to the table
//     list.appendChild(newItem);
//   } else {
//     console.log("else");
//     // let newItem = document.createElement("p");
//     // newItem.textContent = "Add items to your list.";
//     // newItem.appendChild(newItem);
//   }
// });
