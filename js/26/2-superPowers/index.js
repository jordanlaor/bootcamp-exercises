function printSuperPower() {
  console.log(`my superpower is ${this.superPower}`);
}

const storm = {
  superPower: 'Making the world sunny',
  printSuperPower,
};
