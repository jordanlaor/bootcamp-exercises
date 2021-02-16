/* eslint-disable no-plusplus */
function getSum(arr1, arr2) {
  let sum = 0;
  debugger; // tool used- debugger
  // line 6 and line 10: can't read length of undefined-the arrays where passed with no commas between them in line 18, added a comma in line 15
  for (let i = 0; i < arr1.length; i++) {
    // line 8 and line 11: sum is constant, you can change a constant, changed const to let in line 3
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  // the sum should be returned
  return sum;
}

// line 18: the second array is passed not as an array, removed ().
getSum([1, 2, 3], [5, 66, 23]);
