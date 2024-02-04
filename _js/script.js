// instantiate permList that will update localStorage

// Convert permList array to a JSON string and store it in localStorage
// sets 'backend' and sets initial state: array with single empty object
if (localStorage.getItem("permList") === null) {
  var permList = [{}];
  localStorage.setItem("permList", JSON.stringify(permList));
}

// Retrieve the JSON string from localStorage and parse it back to an array
const getList = () => {
  // returns localStorage todo list as array of objects
  return JSON.parse(localStorage.getItem("permList"));
};

const addTask = (task) => {
  // set temp var that = todo list
  let temp = JSON.parse(localStorage.getItem("permList"));
  // push temp object to todo list
  temp.push(task);
  // overwrite todo_list with new local todo list
  localStorage.setItem("permList", JSON.stringify(temp));
};

// todo model class
class ToDo {
  constructor(task, urgency, dueDate) {
    this.id = JSON.parse(localStorage.getItem("permList")).length;
    this.task = task;
    this.dateAdded = new Date();
    this.urgency = urgency;
    this.dueDate = new Date(dueDate);
    this.done = false;
  }
}

const dateConverter = (date) => {
  let temp = new Date(date);
  let month = temp.getMonth() + 1;
  let day = temp.getDay();
  let year = temp.getFullYear();
  return `${month}/${day}/${year}`;
};
// // get form:
let form = document.getElementById("form");
// destructure form fields:
const { task, urgency, dueDate } = form;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let tempTask = new ToDo(task.value, urgency.value, dueDate.value);
  addTask(tempTask);
  drawTable();
});

// Retrieve the list element
let list = document.getElementById("list");

// redraws table
const drawTable = () => {
  let displayList = getList();
  list.innerHTML = "";
  displayList.forEach((item) => {
    if (item.id > 0) {
      // Create a new table row
      let newItem = document.createElement("tr");

      // Create and append table cells
      let idCell = document.createElement("td");
      idCell.textContent = item.id;
      idCell.classList.add("centered-text");
      newItem.appendChild(idCell);

      let taskCell = document.createElement("td");
      taskCell.textContent = item.task;
      newItem.appendChild(taskCell);

      let dateAddedCell = document.createElement("td");
      dateAddedCell.textContent = dateConverter(item.dateAdded);
      dateAddedCell.classList.add("centered-text");
      newItem.appendChild(dateAddedCell);

      let urgencyCell = document.createElement("td");
      urgencyCell.textContent = item.urgency;
      newItem.appendChild(urgencyCell);

      let dateDueCell = document.createElement("td");
      dateDueCell.textContent = dateConverter(item.dueDate);
      dateDueCell.classList.add("centered-text");
      newItem.appendChild(dateDueCell);

      let editCell = document.createElement("td");
      editCell.innerHTML = `<button class="uk-icon-button caution" uk-icon="file-edit"></button>
      <button id=${item.id} class="uk-icon-button warning" uk-icon="trash"></button>`;
      editCell.classList.add("centered-text", "centered-icons");
      newItem.appendChild(editCell);

      // Append the new table row to the table
      list.appendChild(newItem);
    }
  });
};

drawTable();

// get delete buttons
let deleteButtons = Array.from(document.getElementsByClassName("warning"));

const handleDeleteTask = (e) => {
  e.preventDefault();
  let editList = getList();
  console.log("edit list: ", editList);
  let editedList = editList.filter((task) => {
    return task.id !== parseInt(e.target.id);
  });
  console.log("edited list: ", editedList);
  localStorage.setItem("permList", JSON.stringify(editedList));
  drawTable();
};

// Attach event listener to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener("click", handleDeleteTask);
});
