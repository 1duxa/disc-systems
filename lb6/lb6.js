const fs = require('fs');

function readGraphFromFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        const lines = data.split('\n');

        const [n, m] = lines[0].split(' ').map(Number);

        const edges = {};
        for (let i = 1; i <= m; i++) {
            const [vi, ui] = lines[i].split(' ').map(Number);

            if (!edges[vi]) {
                edges[vi] = [];
            }
            if (!edges[ui]) {
                edges[ui] = [];
            }

            edges[vi].push(ui);
          
        }

        return { n, m, edges };
    } catch (error) {
        console.error('Помилка при читанні файлу:', error.message);
        return null;
    }
}

function IncidenceMatrix(graph) {
    const incidenceMatrix = [];

    for (let i = 1; i <= graph.n; i++) {
        const row = [];
        for (let j = 0; j < graph.m; j++) {
            const edge = graph.edges[i].includes(graph.edges[j]) ? 1 : 0;
            row.push(edge);
        }
        incidenceMatrix.push(row);
    }

    return incidenceMatrix;
}

function AdjacencyMatrix(graph) {
    const adjacencyMatrix = [];

    for (let i = 1; i <= graph.n; i++) {
        const row = [];
        for (let j = 1; j <= graph.n; j++) {
            const connected = graph.edges[i].includes(j) ? 1 : 0;
            row.push(connected);
        }
        adjacencyMatrix.push(row);
    }

    return adjacencyMatrix;
}

function writeMatrixToFile(matrix, filename) {
    const data = matrix.map(row => row.join(' ')).join('\n');
    fs.writeFileSync(filename, data, 'utf8');
    console.log(`Матрицю записано у файл: ${filename}`);
}

const graph = readGraphFromFile("./lb6/lb6.txt");

console.log(graph);
for (let i = 1; i <= graph.n; i++) {
    console.log(`Edges for vertex ${i}: ${graph.edges[i].join(', ')}`);
}

if (graph) {
    writeMatrixToFile(IncidenceMatrix(graph), "./lb6/i_matrix.txt");
    writeMatrixToFile(AdjacencyMatrix(graph), "./lb6/a_matrix.txt");
}
