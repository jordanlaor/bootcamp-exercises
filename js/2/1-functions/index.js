function describeCountry(country, population, capitalCity) {
  return `${country} has  ${population} people and its capital city is  ${capitalCity}`;
}

const israel = describeCountry('Israel', '9,210,100', 'Jerusalem');
const japan = describeCountry('Japan', '126,476,461', 'Tokyo');
const italy = describeCountry('Italy', '60,461,826', 'Rome');
// eslint-disable-next-line no-console
console.log(`${israel}, ${japan} and ${italy}`);
