// hash table => key-value pair
// kay is always unique and not ordered
// value can be anything
// Fast lookups, insertions, and removals

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31; // Helpful => 31 is a good prime number to use for hashing
        for (let i = 0; i < Math.min(key.length, 100); i++) { // Math.min => to reduce the number of loops
        let char = key[i];
        let value = char.charCodeAt(0) - 96; // ( - 96 ) to get character position in alphabet => 1 => a, 2 => b, 3 => c, ...
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // To avoid collisions => two different keys that are mapped to the same index
    // 1. Separate Chaining => store values in an array at the same index with array or linked list
    // 2. Linear Probing => store values in the next empty slot

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
        this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1];
            }
        }
        }
        return undefined;
    }
    
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!keysArr.includes(this.keyMap[i][j][0])) {
                keysArr.push(this.keyMap[i][j][0]);
            }
            }
        }
        }
        return keysArr;
    }
    
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!valuesArr.includes(this.keyMap[i][j][1])) {
                valuesArr.push(this.keyMap[i][j][1]);
            }
            }
        }
        }
        return valuesArr;
    }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");
console.log(ht);
console.log(ht.get("maroon"));
console.log(ht.keys());
console.log(ht.values());

/* Big O Notation */
// Insertion => O(1)
// Removal => O(1)
// Access => O(1)
