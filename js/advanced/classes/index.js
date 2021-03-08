/* eslint-disable max-classes-per-file */
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

// 2
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  getBrand() {
    return this.brand;
  }

  getSpeed() {
    return this.speed;
  }

  print() {
    return `a ${this.brand}'s car and it's spped is ${this.speed}`;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
}

const cars = [];
cars.push(new Car('Ford', 90));
cars.push(new Car('Mazda', 30));
cars.push(new Car('Toyota', 130));
cars.push(new Car('Mini', 65));

console.log(
  `The fastest car is ${cars.reduce((fastest, car) => (fastest.getSpeed() > car.getSpeed() ? fastest : car)).print()}`
);

function sortCars(cars) {
  const sortedCars = [...cars];
  return sortedCars.sort((car1, car2) => car1.getSpeed() - car2.getSpeed());
}
