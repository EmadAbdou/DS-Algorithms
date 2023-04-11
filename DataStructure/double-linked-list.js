class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newHead = new Node(val);
    var oldHead = this.head;
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      oldHead.prev = newHead;
      newHead.next = oldHead;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if(index <= this.length / 2) {
      var count = 0;
      var current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      var count = this.length - 1;
      var current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(val, index) {
    var node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    var newNode = new Node(val);
    var prevNode = this.get(index - 1);
    var nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop(val);
    if (index === 0) return this.shift(val);
    var removedNode = this.get(index);
    var prevNode = removedNode.prev;
    var nextNode = removedNode.next;

    removedNode.next = null;
    removedNode.prev = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;
    return removedNode;
  }

}

/* Big O Notation */
// Insertion => O(1) => first, last || O(N) => in the middle
// Removal => O(1) => first node || O(N) => last node
// Searching => O(N)
// Access => O(N)
