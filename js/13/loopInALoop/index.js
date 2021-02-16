/* eslint-disable no-console */
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (const arr of listOfNeighbours) {
  for (const country of arr) {
    console.log(`neighbour: ${country}`);
  }
}
