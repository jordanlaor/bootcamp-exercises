const hero = {
  health: 5,
  power: 68,
  getStrength() {
    if (this.health <= 5) {
      return this.power - 10;
    }
    return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return 'I am stronger';
  }
  return 'You are stronger';
}

// right now the function is ran with this pointing to the window. We need to bind it to the hero
// whoIsStronger(hero.getStrength);
whoIsStronger(hero.getStrength.bind(hero));
