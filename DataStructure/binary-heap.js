// Binary Heap => Like Binary Search Tree
// MaxBinaryHeap => Parent node always bigger than child nodes
// MinBinaryHeap => Parent node always smaller than child nodes
// Left children filled out first
// Binary Heaps Used In Priority Queues and Graph Traversal
// Every Parent has index n => left child => (n*2) + 1 , => right child => (n*2) + 2
// Every child has index n => Parent => (n-1)/2 then floored


class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // Insert => Push to array then Bubble up to put value in the right position

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // Remove => Remove the root then replace with the most recently added then sink down to put value in the right position
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap) //  [55, 39, 41, 18, 27, 12, 33]
heap.extractMax(); // 55
console.log(heap); // [41, 39, 33, 18, 27, 12]


/* Big O Notation */
// Insertion => log(N) for 16 elements => 4 levels => 4 comparisons
// Removal => log(N) for 16 elements => 4 levels => 4 comparisons
// Search => O(N)
// Binary Heaps are not good at searching