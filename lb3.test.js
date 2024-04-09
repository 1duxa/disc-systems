const lb3 = require("./lb3");

test("Bells num ",()=>{
    let table = Array.from(Array(8), () => new Array(8));
    let resultTable = lb3.STIRLING_SECOND_KIND(table);
    expect(lb3.bells_nums(resultTable)).toBe(877);
})