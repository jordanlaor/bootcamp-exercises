/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
const numbers = [1, 10, 15, 20, 200, 301, 23, 17, 34];

function max(arr) {
  return arr.reduce((accumulator, currentValue) => (accumulator < currentValue ? currentValue : accumulator));
}
console.log(max(numbers));

function sumOfEvenNumbers(arr) {
  return arr.reduce((accumulator, currentValue) => {
    console.log(`cv: ${currentValue}, accumulator ${accumulator}`);
    return currentValue % 2 === 0 ? (accumulator ? accumulator + currentValue : currentValue) : accumulator || 0;
  }, 0);
}
console.log(sumOfEvenNumbers(numbers));

function average(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue) / arr.length;
}
console.log(average(numbers));
