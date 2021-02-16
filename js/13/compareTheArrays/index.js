/* eslint-disable no-console */
const food = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];
const food1 = ['Fries', 'Ice-cream', 'Pizza', 'Olives', 'Hamburgers'];

function compare(arr1, arr2) {
  const same = [];
  for (const el1 of arr1) {
    for (const el2 of arr2) {
      if (el1 === el2) same.push(el1);
    }
  }
  return same;
}

console.log(compare(food, food1));
