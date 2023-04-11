// First In First Out

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enQueue(val) {
    let newNode = new Node(val);
    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  dQueue() {
    if (this.size == 0) return null;
    let temp = this.first;
    if (this.first == this.last) {
      this.last.next = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

// BIG O
// Insertion => O(1)
// Removal => O(1)
// Searching => O(N)
// Access => O(N)