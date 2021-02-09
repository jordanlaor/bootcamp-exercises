function countryToLiveIn(language, isIsland, population, country) {
  if (language === 'English' && population < 50000000 && !isIsland) {
    return `You should live in ${country}`;
  }
  return `${country} does not meet your criteria`;
}

console.log(countryToLiveIn('Hebrew', false, 9000000, 'Israel'));
console.log(countryToLiveIn('English', true, 30000000, 'UK'));
console.log(countryToLiveIn('English', false, 1000000, 'Iceland'));
