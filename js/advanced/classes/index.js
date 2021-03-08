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

// 3
class SortNumber {
  constructor() {
    this.numList = [];
  }

  addNum(num) {
    if (this.numList.includes(num) || num < 2) {
      return false;
    }

    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    this.numList.push(num);
    return true;
  }

  removeNum(num) {
    const index = this.numList.findIndex((number) => number === num);
    return Boolean(index >= 0 ? this.numList.splice(index, 1) : false);
  }

  getAll() {
    return this.numList;
  }

  print() {
    return this.numList.join(', ');
  }

  share(sn) {
    return this.numList.filter((num) => sn.getAll().includes(num)).length;
  }

  union(sn) {
    const all = [...sn.getAll()];
    all.push(...this.numList.filter((num) => !all.includes(num)));
    return all;
  }
}

const prime = new SortNumber();
prime.addNum(2);
prime.addNum(5);
prime.addNum(7);
prime.addNum(9);
prime.addNum(11);
const numbers = new SortNumber();
numbers.addNum(3);
numbers.addNum(5);
numbers.addNum(7);

// 4
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  addToX(x) {
    this.x += x;
  }

  addToY(y) {
    this.y += y;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  addPoint(point) {
    this.addToX(point.getX());
    this.addToY(point.getY());
  }

  isSame(point) {
    return this.x === point.getX() && this.y === point.getY();
  }

  print() {
    return `x: ${this.x} y: ${this.y}`;
  }
}
