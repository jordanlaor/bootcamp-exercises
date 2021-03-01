const obj = {
  name: 'jordan',
  printName() {
    console.log(`The name is ${this.name}`);
  },
  waitASecPrintName() {
    setTimeout(this.printName.bind(obj), 1000);
  },
};
