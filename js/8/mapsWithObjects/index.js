/* eslint-disable no-console */
const obj1 = {
  name: 'string1',
};
const obj2 = {
  name: 'string2',
};

const obj3 = {
  name: 'string3',
};

const map = new Map();
map.set(obj1, 1);
map.set(obj2, 2);
map.set(obj3, 3);

for (const object of map) {
  console.log(`The name is ${object[0].name} and id ${object[1]}`);
}
