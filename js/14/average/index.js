/* eslint-disable no-plusplus */
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
calcAverage([85, 90, 92]);

/*
the function returns the sum but it is named average. Fixed the calculation.
got NaN. Saw with debugger sum is not initialized. fixed.
*/
