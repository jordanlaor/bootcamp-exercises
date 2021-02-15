/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
function doubleValues(array) {
  return array.map((element) => element * 2);
}
console.log(doubleValues([1, 2, 3]));

function onlyEvenValue(array) {
  const returnArray = [];
  array.forEach((element) => {
    if (element % 2 === 0) returnArray.push(element);
  });
  return returnArray;
}
console.log(onlyEvenValue([1, 2, 3, 4]));

function showFirstAndLast(array) {
  const temp = [];
  array.forEach((element) => (typeof element === 'string' ? temp.push(element) : ''));
  return temp.length > 1 ? [temp.shift(), temp.pop()] : temp.length > 0 ? [temp.shift()] : [];
}
console.log(showFirstAndLast([1, 2, 5]));

function vowelCount(str) {
  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0, y: 0 };
  Object.keys(vowels).forEach((vowel) => {
    const reg = new RegExp(vowel, 'ig');
    vowels[vowel] = str.match(reg) ? str.match(reg).length : 0;
  });
  return vowels;
}
console.log(vowelCount("Hello! My name is Jordan! I'm 24 and I love chocolate"));

function capitalize(str) {
  return str
    .split('')
    .map((char) => char.toUpperCase())
    .join('');
}
console.log(capitalize('hi, how are you?'));

function shiftLetters(string) {
  const arrString = string.split('');
  const reg = new RegExp(/[a-y]/, 'i');
  return arrString
    .map((char) => (reg.test(char) ? String.fromCharCode(char.charCodeAt(0) + 1) : char === 'z' ? 'a' : 'A'))
    .join('');
}
console.log(shiftLetters('abcDEfGHijklmnopqrstuvwxyZz'));

function swapCase(str) {
  return str
    .split(' ')
    .map((word, index) => (index % 2 ? capitalize(word) : word.toLowerCase()))
    .join(' ');
}
console.log(swapCase("Hello! My name is Jordan! I'm 24 and I love chocolate"));
