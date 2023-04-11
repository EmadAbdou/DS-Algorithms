// Dijkstra Algorithm => Shortest Path
// Useful for finding the shortest path between two nodes in a graph
// Time Complexity: O(V^2)
// Used In => Google Maps, GPS, Network Routing, Biology, Airline Traffic Control

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(edge) {
        const { vertex1, vertex2, weight } = edge;
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];

        // Build up initial state
        // constructing the initial state of the distances object
        // { A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity, F: Infinity}
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            // constructing the initial state of the previous object
            // { A: null, B: null, C: null, D: null, E: null, F: null}
            previous[vertex] = null;
        }

        // As long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // We are done
                // Build up path to return at end
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // Find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // Calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        // Updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // Updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // Enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge({ vertex1: "A", vertex2: "B", weight: 4 });
g.addEdge({ vertex1: "A", vertex2: "C", weight: 2 });
g.addEdge({ vertex1: "B", vertex2: "E", weight: 3 });
g.addEdge({ vertex1: "C", vertex2: "D", weight: 2 });
g.addEdge({ vertex1: "C", vertex2: "F", weight: 4 });
g.addEdge({ vertex1: "D", vertex2: "E", weight: 3 });
g.addEdge({ vertex1: "D", vertex2: "F", weight: 1 });
g.addEdge({ vertex1: "E", vertex2: "F", weight: 1 });

console.log(g.Dijkstra("A", "E"));