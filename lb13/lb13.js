const fs = require("fs");

function readGraphFromFile(filename) {
    try {
        const data = fs.readFileSync(filename, "utf8");
        const lines = data.split("\n");

        const [n, m] = lines[0].split(" ").map(Number);

        const graph = {};

        for (let i = 1; i <= m; i++) {
            const [v, u] = lines[i].split(" ").map(Number);

            if (!graph[v]) {
                graph[v] = [];
            }
            if (!graph[u]) {
                graph[u] = [];
            }

            graph[v].push(u);
            graph[u].push(v); 
        }

        return { n, m, graph };
    } catch (error) {
        console.error("Помилка при читанні файлу:", error.message);
        return null;
    }
}

function logGraph(graph) {
    const list = graph.graph;

    for (const vertex in list) {
        const neighbors = list[vertex];
        neighbors.forEach((neighbor) => {
            console.log(` ${vertex} --> ${neighbor}`);
        });
    }
}

function countMinimumColors(graph) {
    let colors = {};
    let maxColor = 0;

    for (let vertex in graph) {
        let neighbors = graph[vertex];
        let usedColors = {};

        for (let neighbor of neighbors) {
            if (colors[neighbor] !== undefined) {
                usedColors[colors[neighbor]] = true;
            }
        }

        let color;
        for (color = 1; color <= Object.keys(usedColors).length + 1; color++) {
            if (!usedColors[color]) {
                break;
            }
        }

        colors[vertex] = color;
        maxColor = Math.max(maxColor, color);
    }

    return maxColor;
}

let graph = readGraphFromFile("./lb13/lb13.txt");
logGraph(graph);
let minColors = countMinimumColors(graph.graph);
console.log("Minimum number of colors needed:", minColors);
