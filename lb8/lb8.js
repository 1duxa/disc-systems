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

function depthFirstSearch(graph, source, DFS_stack) {
    if (!graph[source]) {
      return;
    }
    DFS_stack.push(source);
    console.log(source);
  
    for (let neighbor of graph[source]) {
      depthFirstSearch(graph, neighbor, DFS_stack);
    }
  }

let graph = readGraphFromFile("./lb8/lb8.txt");
logGraph(graph);

let DFS_stack = [];
 
depthFirstSearch(graph.list, 1,DFS_stack);

console.log(DFS_stack);

module.exports = { readGraphFromFile, depthFirstSearch };