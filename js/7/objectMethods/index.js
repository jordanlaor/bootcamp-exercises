const myCountry = {
  country: 'Israel',
  capital: 'Jerusalem',
  language: 'Hebrew',
  population: 9,
  neighbours: ['Lebanon', 'Syria', 'Jordan', 'West Bank', 'Egypt', 'Gaza Strip'],
  describe() {
    return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland() {
    this.isIsland = !this.neighbours.length;
  },
};
