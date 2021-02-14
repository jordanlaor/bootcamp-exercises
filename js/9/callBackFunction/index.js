const typeOf = (aThing) => typeof aThing;
const isString = function (str, callBack) {
  return callBack(str) === 'string';
};

console.log(isString('123', typeOf));
console.log(isString([1, 2, 3], typeOf));
