function findSmallest(a, b, c) {
  if (c <= a && c <= b) {
    return c;
  }
  if (a <= b && a <= c) {
    return a;
  }
  return b;
}
findSmallest(52, 66, 2);

/* 
1. findSmalest is not defined in line 10- there's a typo, fixed (debug tool-ran the function and read error thrown)
2. findSmallest return the wrong output (66). The conditions in lines 2, 6 and 8 are not written in the right syntax, fixed (debug tool-put a break point in the beggining of the function) 
*/
