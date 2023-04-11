// Graph => consist of finite set of vertices and edges
// Graph is a non-linear data structure
// Graph is a collection of nodes and edges
// Graph is used to solve many real world problems
// 1. To represent networks
// 2. To represent social networks
// 3. To represent maps
// 4. To represent routes
// 5. To represent circuits
// vertex => node
// edge => connection between two nodes
// Types of Graphs
// 1. Undirected Graph => edges are not directed
// 2. Directed Graph => edges are directed with arrows
// 3. Weighted Graph => edges have weights
// 4. Unweighted Graph => edges have no weights
// 5. Cyclic Graph => graph has cycles
// 6. Acyclic Graph => graph has no cycles
// Graph Representation
// Adjacency Matrix => 2D array of size VxV where V is number of vertices in a graph => O(V^2)
// Adjacency List => array of linked lists of size V where V is number of vertices in a graph => O(V+E)
// Big O for Adjacency List - Adjacency Matrix
// Add Vertex => O(1) - O(v^2)
// Add Edge => O(1) - O(1)
// Remove Vertex => O(v + e) - O(v^2)
// Remove Edge => O(e) - O(1)
// Query => O(v + e) - O(1)
// Storage => O(v + e) - O(v^2)
// Adjacency List
// Can take up less space (in sparse graphs)
// Faster to iterate over all edges
// Can be slower to lookup specific edge
// Adjacency Matrix
// Takes up more space (in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge

// Adjacency List is better for most cases

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }
  // Depth First Traversal => For each vertex, visit all of its children before visiting any of its siblings
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex]?.forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex]?.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  // Breadth First Traversal => For each vertex, visit all of its siblings before visiting any of its children
  // [A: [B, C], B: [D: E], C, D, E, F]
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex]?.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
      );
    }
    return result;
  }
}

let g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("Dallas");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong");
// g.addEdge("Tokyo", "Dallas");
// g.addEdge("Tokyo", "Aspen");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Dallas", "Los Angeles");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Hong Kong", "Aspen");

// A - B
// C   D - F
// E   E   E
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.depthFirstRecursive("A"))