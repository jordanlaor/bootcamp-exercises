function populationPercentages(populations) {
  const percentages = [];
  for (population of populations) {
    percentages.push(percentageOfWorld(population));
  }
  return percentages;
}

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

const populations = [9, 126, 60, 331];

console.log(populationPercentages(populations));
