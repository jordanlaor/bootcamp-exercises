/* eslint-disable no-console */
const str = `I'm a string`;
const num = 123;
const obj = {
  type: 'object',
  value: `I'm an object!`,
};
const bool = 1 < 2;
const nullVar = null;
let undef;
const sym = Symbol('foo');
console.log(typeof str, num, obj, bool, nullVar, undef, sym);
