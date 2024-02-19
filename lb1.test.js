const lb1 = require("./lb1");

test("T XOR F", () => {
  expect(lb1.XOR(true, false)).toBe(false);
});

test("T || F", () => {
  expect(lb1.OR(true, false)).toBe(true);
});
test("T && F", () => {
  expect(lb1.AND(true, false)).toBe(false);
});
