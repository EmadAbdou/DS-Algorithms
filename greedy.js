let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

const finalStations = new Set();

while (statesNeeded.size) {
    let bestStation = null;
    let statesCovered = new Set(); // "id", "nv", "ut"
    for (let station in stations) {
        const states = stations[station]; // Kone // Ktwo
        const covered = new Set([...statesNeeded].filter(x => states.has(x)));  // "id", "nv", "ut" "wa", "id", "mt"
        console.log("🚀 ~ file: greedy.js ~ line 18 ~ covered", covered)
        if (covered.size > statesCovered.size) { // yes
            bestStation = station; // Kone Ktwo
            statesCovered = covered; // "id", "nv", "ut"
        }
    }
    statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
    finalStations.add(bestStation);
}

console.log(finalStations); // Set { 'kone', 'ktwo', 'kthree', 'kfive' }
