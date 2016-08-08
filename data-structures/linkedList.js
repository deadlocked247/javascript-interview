'use strict';

class Node {
  constructor (val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add (value) {
    const node = new Node(value);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.length++;
      return node;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;
    return node;
  }

  remove (position) {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode && position) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      position--;
    }
    previousNode.next = currentNode.next;
    return currentNode;
  }

  print () {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

list.remove(2);
