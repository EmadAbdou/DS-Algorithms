// Tree Has Many Types
// Binary Tree => Each node has at most 2 children
// Binary Search Tree => Sorted binary tree => each node => left is less than node , right is bigger that node

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (current.value == value) return undefined;
        if (value < current.value) {
          if (current.left == null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right == null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {

    if (this.root == null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return false;
    return current;
  }
}

var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.left = new Node(8);
// tree.root.right = new Node(12);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(10); // Undefined
tree.find(55);
console.log(tree);

/* Big O Notation */
// Insertion => O(log n) => If we doubled number of nodes we will only add 1 extra step 
// 2X number og nodes => +1 step
// 4X number og nodes => +2 step
// 8X number og nodes => +3 step
// Searching => O(log n)

// This Big O not applied on one sided BST