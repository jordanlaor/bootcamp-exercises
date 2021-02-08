function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = (population) => (population / 7900) * 100;

const israel = percentageOfWorld1(9.2101);
const japan = percentageOfWorld1(126.476461);
const italy = percentageOfWorld1(60.461826);
const israel2 = percentageOfWorld2(9.2101);
const japan2 = percentageOfWorld2(126.476461);
const italy2 = percentageOfWorld2(60.461826);

console.log(`Israel is ${israel}% of the worlds population, 
Japan is ${japan}% of the worlds population, 
Italy is ${italy}% of the worlds population`);
console.log(`Israel is ${israel2}% of the worlds population, 
Japan is ${japan2}% of the worlds population, 
Italy is ${italy2}% of the worlds population`);
