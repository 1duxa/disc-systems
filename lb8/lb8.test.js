const fs = require("fs");
const { readGraphFromFile, depthFirstSearch } = require("./lb8");


test("DFS traversal starting from vertex 1", () => {
    const graph = readGraphFromFile("./lb8/lb8.txt");
    const DFS_stack = [];
    const expectedTraversalOrder = [1, 2, 4, 5, 3 ,4 ,5];
  
    depthFirstSearch(graph.list, 1, DFS_stack);
  
    expect(DFS_stack).toEqual(expectedTraversalOrder);
  });
