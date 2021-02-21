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
  }
}
