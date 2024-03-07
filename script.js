// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.

//App State Variables
let tasks = [];
//cashed elements refs
const taskForm = document.getElementById("taskForm")
const taskTable = document.getElementById("taskTable")

//funcs
//submission handler
function handleSubmission(e) {
  e.preventDefault()
  //
  let taskName = document.getElementById("taskName")
  let taskDesc = document.getElementById("taskDescription")
  let taskDeadline = document.getElementById("taskDeadline")
  //validate input fields
  // this can be achieved by putting "required" into the form element in the html file.

  //update task arrays
  tasks.push({
    name: taskName,
    description: taskDesc,
    deadline: taskDeadline
  })
  render();
}

function render() {

}

function init() {
  taskTable.innerHTML = '';
  tasks = []
  render();
}