/* eslint-disable no-console */
function steps(nOfSteps) {
  const diez = '#';
  const space = ' ';
  for (let i = 1; i <= nOfSteps; i += 1) {
    console.log(`'${diez.repeat(i)}${space.repeat(nOfSteps - i)}'`);
  }
}

steps(5);

function stepsNinja(nOfSteps) {
  const diez = '#';
  const space = ' ';
  for (let i = 1; i <= nOfSteps; i += 1) {
    const line = [];
    for (let j = 1; j <= nOfSteps; j += 1) {
      j <= i ? line.push(diez) : line.push(space);
    }
    console.log(`'${line.join('')}'`);
  }
}
stepsNinja(10);
