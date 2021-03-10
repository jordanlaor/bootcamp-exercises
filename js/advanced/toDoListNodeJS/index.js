/* eslint-disable no-plusplus */
const toDoList = [];
let taskId = 1000;

function addItem(taskName) {
  toDoList.unshift({
    taskId: taskId++,
    taskName,
    isCompleted: false,
  });
}

function getTaskById(id) {
  return toDoList.findIndex((task) => task.taskId === id);
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
    return toDoList;
  }
  return 'Something went wrong';
}

function sortList() {
  toDoList.sort((itemA, itemB) => itemA.isCompleted - itemB.isCompleted);
}

function list() {
  sortList();
  return toDoList.map(
    (task) => `The task ${task.taskName} [${task.taskId}] is ${task.isCompleted ? 'completed' : 'not completed'}`
  );
}

addItem('Eat pizza');
addItem('Eat chocolate');
list();
addItem('Eat cake');
toggleIsComplete(1000);
list();
addItem('Eat cookies');
toggleIsComplete(1000);
list();
deleteItem(1002);
list();

function sum(a, b) {
  return a + b;
}
module.exports = { toDoList, taskId, addItem, getTaskById, deleteItem, toggleIsComplete, sortList, list, sum };
