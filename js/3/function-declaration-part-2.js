/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
// eslint-disable-next-line arrow-body-style
const welcome = () => {
  return 'Welcome to Appleseeds Bootcamp!';
};

const power = (a) => a ** 2;

// From function expressions to IIFE functions.
(function (a) {
  return Math.sqrt(a);
})(4);

(function (a, b) {
  return Math.random() * (a - b) + b;
})();
