import { Node } from "./node";

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.head) {
      node.nextNode = this.head;
      this.head = node;
    }

    this.head = node;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = node;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {}

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let stringList = "";
    while (current != null) {
      stringList += `(${current.value}) -> `;
      current = current.nextNode;
    }
    return (stringList += "null");
  }
}
