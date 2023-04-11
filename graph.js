let graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

function isSeller(name) {
  return name[name.length-1] === 'm'
}

function bfsSearch(name) {
  let search_queue = [];
  search_queue = [...search_queue, ...graph[name]];
  let searched = [];

  while (search_queue.length) {
    let person = search_queue.pop();
    if (searched.indexOf(person) === -1) {
      if (isSeller(person)) {
        console.log(`${person} is a mango seller`);
        return true;
      }
      search_queue = [...search_queue, ...graph[person]];
      searched.push(person);
    }
  }
  return false
}

bfsSearch('you')
