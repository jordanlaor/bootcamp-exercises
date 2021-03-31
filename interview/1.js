// 1
const add = (a) => {
  return (b) => a + b;
};
console.log(add(2)(3));

// 2

// create a function that recieves a matrix, a starting point and an ending point,
// and return if there is a path from starting to end using only 0.
// hasPath([ [0,1,1], [1,0,1], [1,1,0] ], [0,0],[2,2]) #false
// hasPath([ [0,0,0], [0,1,0], [0,1,0] ], [0,0],[2,2]) #true

// shuffle
const shuffle = (arr) => {
  const shuffled = [];
  while (arr.length) {
    const index = Math.floor(Math.random() * arr.length);
    shuffled.push(arr.splice(index, 1));
  }
  return shuffled;
};

// word counter
const counter = (str) => {
  const words = str.toLowerCase().split(/[ ,;]+/);
  const objCounter = {};
  words.forEach((word) => (objCounter[word] = objCounter[word] + 1 || 1));
  return objCounter;
};
console.log(counter("hello,i am jordy and I am a programmer; how are you, i am well"));

//
const isSum = (arr, n) => {
  const half = Math.floor(n / 2);
  for (const i = 0; i < arr.length && i < half; i++) {
    for (const j = i + 1; j < arr.length && j < n; j++) {
      if (i + j === n) return true;
    }
  }
  return false;
};
