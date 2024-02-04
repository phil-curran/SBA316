// if permlist isn't already in localStorage
if (localStorage.getItem("permList") === null) {
  // instantiate permlist as array of empty object
  var permList = [{}];
  // set localstorage with permlist
  localStorage.setItem("permList", JSON.stringify(permList));
}

// Retrieve the JSON string from localStorage and parse it back to an array
const getList = () => {
  // returns localStorage todo list as array of objects
  return JSON.parse(localStorage.getItem("permList"));
};

const addTask = (task) => {
  // set temp var that = todo list as an array
  let temp = JSON.parse(localStorage.getItem("permList"));
  // push temp object to todo list array
  temp.push(task);
  // overwrite todo_list with new local todo list as string
  localStorage.setItem("permList", JSON.stringify(temp));
};

// todo model class
class ToDo {
  constructor(task, urgency, dueDate) {
    this.id = getList().length;
    this.task = task;
    this.dateAdded = new Date();
    this.urgency = urgency;
    this.dueDate = new Date(dueDate);
    console.log("this due date: ", this.dueDate);
    this.done = false;
  }
}

const dateConverter = (date) => {
  let temp = new Date(date);
  let month = temp.getMonth() + 1;
  let day = temp.getDay();
  let formattedDate = (date) => {
    return date < 10 ? "0" + date : date;
  };
  let year = temp.getFullYear();
  return `${formattedDate(month)}/${formattedDate(day)}/${year}`;
};

// get form:
let form = document.getElementById("form");
// destructure form fields:
const { task, urgency, dueDate } = form;

form.addEventListener("submit", (e) => {
  // use ToDo task to create new todo object
  let tempTask = new ToDo(task.value, urgency.value, dueDate.value);
  // call addTask function and push new tempTask
  addTask(tempTask);
  // rerender table
  drawTable();
});

// Get & set tbody as target for tr list creation
let list = document.getElementById("list");

// redraws table
const drawTable = () => {
  // get todo list from localStorage as array
  let displayList = getList();
  // clear list innerhtml otherwise rows just pile up
  list.innerHTML = "";
  // map todo list and create new row for each item
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

// render table on load
drawTable();

// get delete buttons
let deleteButtons = Array.from(document.getElementsByClassName("warning"));

// event handler for deleting tasks
const handleDeleteTask = (e) => {
  // e.preventDefault();
  // gets list from localStorage as array
  let editList = getList();
  // filters out tasks that are the clicked task.id
  let editedList = editList.filter((task) => {
    return task.id !== parseInt(e.target.id);
  });
  // overwrites localStorage item with new array as string
  localStorage.setItem("permList", JSON.stringify(editedList));
  // retrigger render of table with new version of todo list
  drawTable();
};

// Attach event listener to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener("click", handleDeleteTask);
});
