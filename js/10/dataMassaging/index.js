/* eslint-disable no-prototype-builtins */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
function names(array) {
  return array.map((element) => element.name);
}

function before1990(array) {
  const temp = [];
  array.forEach((element) => {
    const year = element.birthday.split('-').pop();
    year < 1990 ? temp.push(element) : null;
  });
  return temp;
}

function foodCounted(array) {
  const foods = array.map((element) => Object.values(element.favoriteFoods)).flat(Infinity);
  const obj = {};
  for (const food of foods) {
    if (obj.hasOwnProperty(food)) {
      continue;
    }
    obj[food] = foods.filter((item) => food === item).length;
  }
  return obj;
}

const data = [
  {
    name: 'John',
    birthday: '1-1-1995',
    favoriteFoods: {
      meats: ['hamburgers', 'sausages'],
      fish: ['salmon', 'pike'],
    },
  },
  {
    name: 'Mark',
    birthday: '10-5-1980',
    favoriteFoods: {
      meats: ['hamburgers', 'steak', 'lamb'],
      fish: ['tuna', 'salmon', 'barracuda'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['ham', 'chicken'],
      fish: ['pike'],
    },
  },
  {
    name: 'Thomas',
    birthday: '1-10-1990',
    favoriteFoods: {
      meats: ['bird', 'rooster'],
      fish: ['salmon'],
    },
  },
  {
    name: 'Mary',
    birthday: '1-10-1977',
    favoriteFoods: {
      meats: ['hamburgers', 'lamb'],
      fish: ['anchovies', 'tuna'],
    },
  },
];

console.log(names(data));
console.log(before1990(data));
console.log(foodCounted(data));
