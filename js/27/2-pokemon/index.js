function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pokemon1 = new Pokemon('Po', 'water', ['water gun', 'icing', 'water baloon attack']);
const pokemon2 = new Pokemon('Ke', 'fire', ['fire gun', 'steaming', 'lava attack']);
const pokemon3 = new Pokemon('Mon', 'earth', ['earthquake', 'mountain creating', 'rock attack']);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (attackNum) {
  if (this.attackList[attackNum]) {
    console.log(`${this.name} used ${this.attackList[attackNum]}`);
  } else {
    console.log(`sorry, that's not a possible attack number`);
  }
};

pokemon1.callPokemon();
pokemon1.attack(1);
pokemon2.callPokemon();
pokemon2.attack(0);
pokemon3.callPokemon();
pokemon3.attack(2);
pokemon3.attack(3);
