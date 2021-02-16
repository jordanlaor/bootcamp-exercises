function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
returning the even numbers of an array with the length of 10 means indexes 1,3,5,7,9 (arrays are zero based count).
An array with the length of 10 doesnt have an index of 10, it is zero bsed so its 0-9.
To see it I opened the debugger and saw that it sums up the wrong indexes.
*/
