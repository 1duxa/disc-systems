const fs = require("fs");

function readGraphFromFile(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    const lines = data.split("\n");
    
    const [n, m] = lines[0].split(" ").map(Number);

    const list = {};

    for (let i = 1; i < lines.length; i++) {
      let [v, u] = lines[i].split(" ").map(Number);

      if (!u || undefined) {
        u = [];
      }

      if (!list[v]) {
        list[v] = [];
      }

      list[v].push(u);
    }

    return { n, m, list };
  } catch (error) {
    console.error("Помилка при читанні файлу:", error.message);
    return null;
  }
}

function logGraph(graph) {
  const list = graph.list;

  for (const vertex in list) {
    const neighbors = list[vertex];
    neighbors.forEach((neighbor) => {
        console.log(` ${vertex} --> ${neighbor}`);
      }
    );
  }
}

function breadthFirstSearch(graph, source) {
  const queue = [source];
  let BFS_queue = [];  
  while(queue.length > 0){
  
    const curr = queue.shift();
    BFS_queue.push(curr);
    console.log(curr);
    
    for (let neighbor of graph[curr]) {
        queue.push(neighbor);
        if (neighbor.length === 0) {
            return BFS_queue;
          }
    }
  }
}

let graph = readGraphFromFile("./lb9/lb9.txt");
logGraph(graph);
console.log(breadthFirstSearch(graph.list, 1));

module.exports = { readGraphFromFile, breadthFirstSearch } 
