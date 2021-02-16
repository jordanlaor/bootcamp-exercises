/* eslint-disable no-console */
function populationPercentages(populations) {
  const percentages = [];
  while (populations.length) {
    percentages.push(percentageOfWorld(populations.pop()));
  }
  return percentages;
}

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

const populations = [9, 126, 60, 331];

console.log(populationPercentages(populations));
