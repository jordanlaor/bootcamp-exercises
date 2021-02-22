/* eslint-disable max-classes-per-file */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }

  toString() {
    return this.element.toString();
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }

  push(element) {
    if (!this.head) {
      this.head = new Node(element);
      this.last = this.head;
    } else {
      this.last.next = new Node(element);
      this.last = this.last.next;
    }
    this.size += 1;
    return this.last;
  }

  changeLastNext(element) {
    this.last.next = element;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.last;
  }

  draw() {
    let current = this.head;
    let value = '[Head] ==> ';
    while (current) {
      value += `[${current.toString()}] ==> `;
      current = current.next;
    }
    return `${value}[Tail]`;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    this.last = this.head;
    let nextSave = current.next;
    while (current) {
      nextSave = current.next;
      current.next = prev;
      prev = current;
      current = nextSave;
    }
    this.head = prev;
  }

  removeKNode(k) {
    let count = 0;
    let current = this.head;
    let previous = null;
    while (count < k) {
      previous = current;
      current = current.next;
      count += 1;
    }
    if (k === this.size - 1) {
      this.last = previous;
    }
    if (k === 0) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }
    this.size -= 1;
  }

  static circularLinkedList(listToCheck) {
    let current = listToCheck.head;
    const pointers = [];
    while (current) {
      pointers.push(current);
      for (const pointer of pointers) {
        if (pointer === current.next) {
          return true;
        }
      }
      current = current.next;
    }
    return false;
  }
}

const list = new LinkedList();
const one = list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.changeLastNext(one);
