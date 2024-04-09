const lb6 = require("./lb6");
test("Матриця інцидентності", () => {
    const incidenceMatrix = [[-1,-1,0,0,0,1],[1,0,-1,0,0,0],[0,1,0,-1,0,0],[0,0,1,1,-1,0],[0,0,0,0,1,-1]];

    
    const graph = {
        n: 5,
        m: 6,
        list: {
            "1": ["2", "3"],
            "2": ["4"],
            "3": ["4"],
            "4": ["5"],
            "5": ["1"],
        },
    };
    expect(lb6.createIncidenceMatrix(graph)).toEqual(incidenceMatrix);
});

