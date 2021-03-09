const toDoList = [];
let taskId = 1000;

function getTaskById(id) {
  return toDoList.findIndex((task) => task.taskId === id);
}

function sortList() {
  toDoList.sort((itemA, itemB) => itemA.isCompleted - itemB.isCompleted);
}

function addItem(taskName) {
  toDoList.unshift({
    taskId: taskId++,
    taskName,
    isCompleted: false,
  });
}

function deleteItem(id) {
  const index = getTaskById(id);
  if (index >= 0) {
    toDoList.splice(index, 1);
    return toDoList;
  }
  return 'Something went wrong';
}

function toggleIsComplete(id) {
  const index = getTaskById(id);
  if (index >= 0) {
    toDoList[index].isCompleted = !toDoList[index].isCompleted;
    sortList();
    return toDoList;
  }
  return 'Something went wrong';
}

function list() {
  return toDoList.map(
    (task) => `The task ${task.taskName} [${task.taskId}] is ${task.isCompleted ? 'completed' : 'not completed'}`
  );
}
