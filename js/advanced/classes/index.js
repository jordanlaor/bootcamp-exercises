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

// 5
class PointWorld {
  constructor() {
    this.pointsList = [];
  }

  sortY() {
    this.pointsList.sort((pointA, pointB) => pointB.getY() - pointA.getY());
  }

  unique() {
    const uniqueList = [];
    this.pointsList.forEach((point) => {
      if (!uniqueList.find((uniquePoint) => uniquePoint.isSame(point))) {
        // if (!uniqueList.find((uniquePoint) => uniquePoint.x === point.x && uniquePoint.y === point.y)) {
        uniqueList.push(point);
      }
    });
    return uniqueList;
  }

  sumX() {
    return this.pointsList.reduce((sum, point) => sum + point.getX(), 0);
  }

  includes(point) {
    return (
      this.pointsList.find(
        (pointFromList) => pointFromList.getX() === point.getX() && pointFromList.getY() === point.getY()
      ) || false
    );
  }
}

// 6
class Room {
  constructor(roomId, level, amount) {
    this.roomId = roomId;
    this.level = level;
    this.amount = amount;
    this.isFree = true;
  }

  occupy(amount) {
    if (this.isFree && this.amount >= amount) {
      this.isFree = false;
      return true;
    }
    return false;
  }

  print() {
    return `Room number ${this.roomId} is on level ${this.level}. It has room for up to ${this.amount}. This room is ${
      this.isFree ? 'free' : 'occupied'
    }.`;
  }
}

// 7
class Hotel {
  constructor(room) {
    this.rooms = [room];
  }

  addRoom(room) {
    if (this.rooms.find((roomFromList) => roomFromList.id === room.id)) {
      return false;
    }
    this.rooms.push(room);
    return true;
  }

  addNewRoom(roomId, level, amount) {
    return this.addRoom(new Room(roomId, level, amount));
  }

  removeRoom(roomId) {
    const room = this.rooms.findIndex(roomId);
    if (room >= 0 && room.isFree) {
      this.rooms.splice(room, 1);
      return true;
    }
    return false;
  }

  checkFreeRooms(amount) {
    return this.rooms.filter((room) => room.amount >= amount);
  }

  checkIn(roomId, amount) {
    return Boolean(this.rooms.find((room) => room.roomId === roomId).occupy(amount));
  }

  highRoomFree() {
    let maxFloor = 0;
    let roomsInMax = [];
    this.rooms.forEach((room) => {
      if (room.isFree) {
        if (room.level > maxFloor) {
          maxFloor = room.level;
          roomsInMax = [room];
        } else if (room.level === maxFloor) {
          roomsInMax.push(room);
        }
      }
    });
    return roomsInMax.sort((roomA, roomB) => roomB.amount - roomA.amount);
  }

  getAllRooms(isFree) {
    return this.rooms.filter((room) => room.isFree === isFree).sort((roomA, roomB) => roomA.roomId - roomB.roomId);
  }
}
