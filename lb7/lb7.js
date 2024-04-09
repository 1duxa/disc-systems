const fs = require("fs");

function readGraphFromFile(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    const lines = data.split("\n");
    const [n, m] = lines[0].split(" ").map(Number);

    const edges = [];
    for (let i = 1; i < lines.length; i++) {
      let [v, u] = lines[i].split(" ").map(Number);

      if (!u) u = 0;

      edges.push({ v, u });
    }

    return { n, m, edges };
  } catch (error) {
    console.error("Помилка при читанні файлу:", error.message);
    return null;
  }
}

let stepinVershyn = (graph) => {
  let stepin = {};

  graph.edges.forEach((edge) => {
    const { v, u } = edge;
    if (u) {
      stepin[v] = (stepin[v] || 0) + 1;
    } else {
      stepin[v] = 0;
    }
  });
  return stepin;
};

let isolated_or_solo_nodes = (stepin) => {
  let arr = {
    "Ізольовані": [],
    "Висячі": [],
  };
  for (const i in stepin) {
    if (stepin[i] === 1) arr["Висячі"].push(i);
    if (stepin[i] === 0) arr["Ізольовані"].push(i);
  }
  return arr;
};

let graph = readGraphFromFile("./lb7/lb7.txt");

for (let i = 0; i < graph.edges.length; i++) {
  let { v, u } = graph.edges[i];
  console.log(` ${v} --> ${u}`);
}

let stepin = stepinVershyn(graph);
console.log("Cтeпeнi : ",stepin);
let is = isolated_or_solo_nodes(stepin);
console.log(` Ізольовані ${is["Ізольовані"]} \n Висячі ${is["Висячі"]}`);

module.exports = {stepinVershyn,isolated_or_solo_nodes}