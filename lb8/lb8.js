const fs = require("fs");

function readGraphFromFile(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    const lines = data.split("\n");

    const [n, m] = lines[0].split(" ").map(Number);

    const edges = [];
    for (let i = 1; i <= lines.length; i++) {
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
