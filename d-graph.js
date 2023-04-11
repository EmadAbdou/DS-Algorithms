// the graph
const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

// The costs table
const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

// the parents table
const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

let processed = [];

function findLowestCostNode(costs) {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    // Go through each node
    for (let node in costs) {
        const cost = costs[node]; 
        // If it's the lowest cost so far and hasn't been processed yet...
        if (cost < lowestCost && processed.indexOf(node) === -1) {
            // ... set it as the new lowest-cost node.
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

let node = findLowestCostNode(costs); // 2 => B

while (node !== null) {
    const cost = costs[node]; // 2
    // Go through all the neighbors of this node
    const neighbors = graph[node]; // A, FIN
    // console.log(neighbors);
    Object.keys(neighbors).forEach(function (n) {
        const new_cost = cost + neighbors[n]; // 2 + 3, 2 + 5
        // console.log(neighbors[n]);
        console.log(new_cost);
        // If it's cheaper to get to this neighbor by going through this node
        console.log(n, costs[n]);
        if (costs[n] > new_cost) {
            // ... update the cost for this node
            costs[n] = new_cost; // FIN
            // This node becomes the new parent for this neighbor.
            parents[n] = node; 
        }
    });

    // Mark the node as processed
    processed = processed.concat(node);

    // Find the next node to process, and loop
    node = findLowestCostNode(costs);
}

console.log("Cost from the start to each node:");
console.log(costs); // { a: 5, b: 2, fin: 6 }

