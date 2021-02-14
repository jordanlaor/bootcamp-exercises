const foods = ['falafel', 'sabich', 'hummus', 'pizza with extra pineapple'];
foods.sort();
foods.reverse();

const foodsWithUpperCase = ['falafel', 'Sabich', 'hummus', 'pizza with extra pineapple'];
console.log(foodsWithUpperCase.sort((a, b) => a.localeCompare(b)));
console.log(foodsWithUpperCase.sort((a, b) => b.localeCompare(a)));

const words = ['apple', 'supercalifragilisticexpialidocious', 'hi', 'zoo'];

console.log(words.sort((a, b) => a.length - b.length));
console.log(words.sort((a, b) => b.length - a.length));
