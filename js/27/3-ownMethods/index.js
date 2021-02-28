/* eslint-disable no-extend-native */
Array.prototype.myFilter = function (callback) {
  const returnArr = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      returnArr.push(this[i]);
    }
  }
  return returnArr;
};

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

Array.prototype.myReduce = function (callback, ...param) {
  let acc;
  let i = 0;
  if (param.length > 0) {
    acc = param[0];
  } else {
    acc = this[i];
    i += 1;
  }
  for (i; i < this.length; i += 1) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
