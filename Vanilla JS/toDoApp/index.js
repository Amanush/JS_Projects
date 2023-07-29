var taskArray = [];

function addItem() {
  var input = document.getElementById("inputBox");
  var task = input.value.trim();

  if (task !== "") {
    taskArray.push(task);
    input.value = "";
    displayTasks();
  }
}

function displayTasks() {
  var list = document.getElementById("todoList");
  list.innerHTML = "";

  taskArray.forEach(function(task) {
    var li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}
