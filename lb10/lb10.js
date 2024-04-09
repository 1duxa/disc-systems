
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

      list[v].push({ end:u, w: Number(w) });
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

function createWeightMatrix(graph) {
    let { n, list } = graph;
    const weightMatrix = Array.from({ length: n }, () => Array(n).fill(Infinity));
  
    let count_row = 0;
    
    for (let i = 0; i < n; i++) {
        weightMatrix[i][i] = 0;
    }

    for (let row_key in list) {
      let count_column = 0;
  
      for (let column_key in list) {
        if (list[row_key].some((item) => item.end === column_key)) {
       
            weightMatrix[count_row][count_column] = list[row_key].find((item) => item.end === column_key).w;
        }
        count_column++;
      }
      count_row++;
    }
    return weightMatrix;
  }

  function writeMatrixToFile(matrix, filename) {
    const data = matrix.map(row => row.map(cell => cell.toString().padEnd(10, ' ')).join(" ")).join("\n");
  
    fs.writeFileSync(filename, data, "utf8");
    console.log(`Матрицю записано у файл: ${filename}`);
  }
  
const graph = readGraphFromFile("./lb10/lb10.txt");
let matrix = createWeightMatrix(graph);

logGraph(graph);




writeMatrixToFile(matrix, "./lb10/weight_matrix.txt");