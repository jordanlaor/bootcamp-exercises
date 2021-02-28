/* eslint-disable no-extend-native */
/* Implement the following methods -
- Filter
-ForEach
- Map
Using only for(), array and objects (without other js methods) */

Array.prototype.myFilter = function (callback) {
  const returnArr = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback.length === 1) {
      if (callback(this[i])) {
        returnArr.push(this[i]);
      }
    } else if (callback.length === 2) {
      if (callback(this[i], i)) {
        returnArr.push(this[i]);
      }
    } else if (callback.length === 3) {
      if (callback(this[i], i, this)) {
        returnArr.push(this[i]);
      }
    }
  }
  return returnArr;
};

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback.length === 1) {
      callback(this[i]);
    } else if (callback.length === 2) {
      callback(this[i], i);
    } else if (callback.length === 3) {
      callback(this[i], i, this);
    } else {
      return undefined;
    }
  }
};

Array.prototype.myMap = function (callback) {
  const returnArr = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback.length === 1) {
      returnArr.push(callback(this[i]));
    } else if (callback.length === 2) {
      returnArr.push(callback(this[i], i));
    } else if (callback.length === 3) {
      returnArr.push(callback(this[i], i, this));
    }
  }
  return returnArr;
};
