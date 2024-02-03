// instantiate remote permList that will update localStorage

if (localStorage.getItem("permList")) {
  let permList = localStorage.getItem("permList");
} else {
  localStorage.setItem("permList", [{}]);
}

// Convert permList array to a JSON string and store it in localStorage
// sets 'backend' and sets initial state: array with single empty object
localStorage.setItem("permList", JSON.stringify(permList));

// function that overwrites tempList retrieves permList from 'remote' localStorage
const updateTempList = () => {
  return JSON.parse(localStorage.getItem("permList"));
};

// instantiates local tempList; temp copy of 'remote' permList
// let tempList = updateTempList();
let tempList = [{}];

const updatePermList = (task) => {
  // set temp var that = tempList
  // let overwritePermList = updateTempList();
  // push temp object to permList
  console.log("tempList before: ", tempList);
  tempList.push(task);
  console.log("tempList after: ", tempList);
  // tempList.push(task);
  // overwrite todo_list with permlist
  localStorage.setItem("permList", JSON.stringify([...tempList]));
  // update local version of todo list
  // updateTempList();
};

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
  // new task object via class ToDo
  let tempTask = new ToDo(task.value, urgency.value, dueDate.value);
  console.log(tempTask);
  updatePermList(tempTask);
  // test addition of task
  console.log("updated temp list: ", tempList);
  console.log("updated perm list: ", permList);
});
