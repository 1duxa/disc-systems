const fs = require("fs");

function readGraphFromFile(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    const lines = data.split("\n");

    const [n, m] = lines[0].split(" ").map(Number);

    const list = {};

    for (let i = 1; i < lines.length; i++) {
      let [v, u, w] = lines[i].split(" ");

      if (!u || u === undefined) {
        u = [];
      }

      if (!list[v]) {
        list[v] = [];
      }

      list[v].push({ end: u, w: Number(w) });
    }

    return { n, m, list };
  } catch (error) {
    console.error("Помилка при читанні файлу:", error.message);
    return null;
  }
}

function logGraph(graph) {
  const list = graph.list;

  for (const key in list) {
    const neighbors = list[key];
    neighbors.forEach((neighbor) => {
      console.log(` ${key} --> ${neighbor.end} (вага: ${neighbor.w})`);
    });
  }
}

function shortest_path(graph, source) {
    const distances = {};
    const queue = [];

    for (let vertex in graph) {
        distances[vertex] = Infinity;
        queue.push(vertex);
    }

    distances[source] = 0;

    while (queue.length > 0) {
        queue.sort((a, b) => distances[a] - distances[b]);

        const current = queue.shift();

        for (let neighbor of graph[current]) {
            const newDistance = distances[current] + neighbor.w;

            if (newDistance < distances[neighbor.end]) {
                distances[neighbor.end] = newDistance;
            }
        }
    }

    return distances;
}



const graph = readGraphFromFile("./lb12/lb12.txt");
logGraph(graph);

let res = shortest_path(graph.list, "v0");
console.log(JSON.stringify(res, null, 2));
