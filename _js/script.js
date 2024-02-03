// instantiate permList that will update localStorage
var permList = [{}];

// Convert permList array to a JSON string and store it in localStorage
// sets 'backend' and sets initial state: array with single empty object
localStorage.setItem("permList", JSON.stringify(permList));

// Retrieve the JSON string from localStorage and parse it back to an array
// overwrites local tempList with data from localStorage
const updateTempList = () => {
  // temp var that pulls from localStorage todo list
  let temp = JSON.parse(localStorage.getItem("permList"));
  // returns localStorage todo list as array of objects
  return temp;
};

let tempList = updateTempList();

console.log("temp list: ", tempList);

const updatePermList = (task) => {
  // set temp var that = tempList
  let permList = updateTempList();
  // push temp object to permList
  permList.push(temp);
  // overwrite todo_list with permlist
  localStorage.setItem("permList", JSON.stringify(permList));
  // update local version of todo list
  updateTempList();
  return permList;
};

let permList = updateTempList();

console.log("perm list: ", permList);

class ToDo {
  constructor(task, urgency, dueDate) {
    this.id = permList.length;
    this.task = task;
    this.dateAdded = new Date();
    this.urgency = urgency;
    this.dueDate = new Date(dueDate);
    this.done = false;
  }
}

// // get form:
let form = document.getElementById("form");
// destructure form fields:
const { task, urgency, dueDate } = form;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("task: ", task.value);
  console.log("urgency: ", urgency.value);
  console.log("due date: ", dueDate.value);
  let temp = new ToDo(task.value, urgency.value, dueDate.value);
  console.log(temp);
  updatePermList(temp);
  console.log("updated temp list: ", tempList.length);
  console.log("updated perm list: ", permList.length);
});
