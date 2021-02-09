/* eslint-disable no-console */
let people = ['Greg', 'Mary', 'Devon', 'James'];
// 1
for (person of people) {
  console.log(person);
}

// 2
people.splice(people.indexOf('Greg'), 1);
console.log(people);

// 3
people.splice(people.indexOf('James'), 1);
console.log(people);

// 4
people.unshift('Matt');
console.log(people);

// 5
people.push('Jordan');
console.log(people);

// 6
for (person of people) {
  console.log(person);
  if (person === 'Mary') {
    break;
  }
}

// 7
let copyArr = [];
const maryMatt = [people.indexOf('Mary'), people.indexOf('Matt')];
maryMatt.sort();
copyArr = people
  .slice(0, maryMatt[0])
  .concat(people.slice(maryMatt[0] + 1, maryMatt[1]), people.slice(maryMatt[1] + 1));

console.log(copyArr);

// 8
const maryIndex = people.indexOf('Mary');
console.log(maryIndex);

// 9
const fooIndex = people.indexOf('Foo');
console.log(fooIndex);

// 10
people = ['Greg', 'Mary', 'Devon', 'James'];
const devonIndex = people.indexOf('Devon');
people.splice(devonIndex, 1);
people = [...people.slice(0, devonIndex), 'Elizabeth', 'Artie', ...people.slice(devonIndex)];
console.log(people);

// 11
const withBob = people.concat(['Bob']);
console.log(withBob);
