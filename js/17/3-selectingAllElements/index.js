const myFirstDiv = document.querySelector('#myFirstDiv');
const mySecondDiv = document.querySelector('#mySecondDiv');
const myThirdDiv = document.querySelector('#myThirdDiv');
const myFourthDiv = document.querySelector('#myFourthDiv');

const myDivs = document.querySelectorAll('div');
const myDivsMap = new Map();
myDivs.forEach((div) => myDivsMap.set(div.id, div));
