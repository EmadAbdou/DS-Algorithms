// Can be implemented with array and it's built in methods
// Last In First Out
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size == 0) return null;
    let popped = this.first;
    if(this.first == this.last) {
        this.last = null
    }
    this.first = this.first.next;
    this.size--;
    return popped.val;
  }
}

// BIG O
// Insertion => O(1)
// Removal => O(1)
// Searching => O(N)
// Access => O(N)