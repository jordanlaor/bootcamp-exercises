/*
--Delete the wrong answers--
1. Which of the following is/are strings?
c) '4'
2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4
3. Which of the following is/are booleans?
a) true
b) false
4. What is the result of 80 + 71.2?
a) 151.2
5. What is the result of "80" + 71.2?
c) "8071.2"
6. Does 100 + 30 produce a number or a string?
a) number
7. Does "100" + 30 produce a number or a string?
b)string
*/

// ------Submit your answers under the question------//

// create three different ways to declare variables
// eslint-disable-next-line no-var
var var1;
let var2;
const var3 = '';

// declare a variable and reassign a value to it
let var4 = 'assigned';
var4 = 'reassigned';

// create a variable and after that assign a string with its value being: He's got it!
let var5;
// eslint-disable-next-line prefer-const
var5 = `He's got it!`;
/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */
const bill = 2134;
const tax = 0.2;
const total = (bill * tax).toFixed(2);
// eslint-disable-next-line no-console
console.log(`Your total bill is ${total} $`);

// Round the number 50.6 to its nearest integer
Math.round(50.6);

// Create a variable that is undefined
let undef;
