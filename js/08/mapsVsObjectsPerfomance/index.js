/* eslint-disable no-console */
const obj = {};
console.time('obj');
for (let i = 0; i < 1000000; i += 1) {
  obj[i] = `value ${i}`;
}

console.timeEnd('obj');

const map = new Map();
console.time('map');
for (let i = 0; i < 1000000; i += 1) {
  map.set(i, `value ${i}`);
}

console.timeEnd('map');

console.time('mapFind');
map.get(345);
console.timeEnd('mapFind');

console.time('objFind');
obj[345];
console.timeEnd('objFind');

console.time('objAdd');
obj.new = 'new';
console.timeEnd('objAdd');

console.time('mapAdd');
map.set('new', 'new');
console.timeEnd('mapAdd');

console.time('objDelete');
delete obj.new;
console.timeEnd('objDelete');

console.time('mapDelete');
map.delete('new');
console.timeEnd('mapDelete');
