const lb7 = require("./lb7");

test("Ізольовані", () => {
    const graph = {
        n: 5,
        m: 5,
        edges: [
            { v: 1, u: 2 },
            { v: 1, u: 3 },
            { v: 2, u: 3 },
            { v: 2, u: 4 },
            { v: 3, u: 4 },
            { v: 4, u: 5 },
        ],
    };
    expect(lb7.isolated_or_solo_nodes(lb7.stepinVershyn(graph))).toEqual({
        "Ізольовані": [],
        "Висячі": ["3","4"],
      });
});
