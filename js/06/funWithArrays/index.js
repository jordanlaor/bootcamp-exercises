const { range } = require('lodash');

// 1
const arr1 = new Array(100).fill('Hi!');

// 2
const arr2 = Array.from(range(1, 101, 1));
console.log(arr2);

// 3
const obj3 = { key1: 'value1', key2: 'value2' };
const arr3 = Object.values(obj3);

// 5
const arr5 = [1, 2, 3, 4];
Array.isArray(arr5);

// 6
const arr6 = [1, 2, 3, 4];
const arrCopy = [...arr6];
arrCopy.push(5);
const arrCopy2 = arr6;
arrCopy2.push(6);
console.log(arr6);
