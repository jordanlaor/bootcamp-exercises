const typeOf = (aThing) => typeof aThing;
const isString = function (str, callBack) {
  return callBack(str) === 'string';
};

console.log(isString('123', typeOf));
console.log(isString([1, 2, 3], typeOf));

function dasshed(str) {
  return str.split(' ').join('-');
}
function firstWordUpperCase(str, callBack) {
  return callBack(str.charAt(0).toUpperCase() + str.slice(1));
}

console.log(firstWordUpperCase('hi, im here!', dasshed));
