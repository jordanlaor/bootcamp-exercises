const {
  toDoList,
  taskId,
  addItem,
  getTaskById,
  deleteItem,
  toggleIsComplete,
  sortList,
  list,
  sum,
} = require('./index.js');

test('sum of two nums', () => {
  expect(sum(1, 4)).toBe(5);
});

test('get a valid task from id', () => {
  expect('');
});
