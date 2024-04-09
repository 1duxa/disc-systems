const fs = require("fs");
const { readGraphFromFile, breadthFirstSearch } = require("./lb9");


test("BFS traversal starting from vertex 1", () => {
    const graph = readGraphFromFile("./lb9/lb9.txt");
    const expectedTraversalOrder = [1, 2, 3, 4, 4 ,5];
  
    const BFS_stack=breadthFirstSearch(graph.list, 1);
  
    expect(BFS_stack).toEqual(expectedTraversalOrder);
  });
