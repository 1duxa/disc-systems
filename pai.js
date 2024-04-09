function createIncidenceMatrix(graph) {
    const { n, m, list } = graph;
  
    const incidenceMatrix = Array.from({ length: n }, () => Array(m).fill(0));
  
    for (let i = 0; i < n; i++) {
        if (list[i + 1]) {
            list[i + 1].forEach((neighbor, index) => {
                incidenceMatrix[i][index] = 1;
                incidenceMatrix[neighbor - 1][index] = -1;
            });
        }
    }
  
    return incidenceMatrix;
}

  const graph = { n: 5, m: 5, list: { 1: [2, 3], 2: [4], 3: [4], 4: [5], 5: [] } };
createIncidenceMatrix(graph).forEach((el)=>{
    console.log(el);
})
  // 1-> 2 -> 4 -> 5 
  //  \  3 /