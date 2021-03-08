// ex1
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  getName() {
    return this.name;
  }

  getSound() {
    return this.sound;
  }

  print() {
    return `The ${this.name} says "${this.sound}"`;
  }
}

const cow = new Animal('cow', 'mooo');
const pig = new Animal('pig', 'oink oink');
const cat = new Animal('cat', 'meeeeow');
