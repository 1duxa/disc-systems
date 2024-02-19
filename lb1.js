// Part 1

let p = true;
let q = false;

let AND = (a, b) => a && b;
let OR = (a, b) => a || b;
let XOR = (a, b) => !(a || b);
let IMPLICATION = (a, b) => !a || b;
let EQUIVALENCY = (a, b) => IMPLICATION(a, b) && IMPLICATION(b, a);

console.log(`XOR = ${XOR(p, q)} AND = ${AND(p, q)} OR = ${OR(p, q)} `);
console.log("Імплікація p -> q = " + IMPLICATION(p, q) + "\n" + "Імплікація q -> p = " + IMPLICATION(q, p));
// p ~ q = (p -> q) && (q -> p)
console.log("Еквівалентність = " + EQUIVALENCY(p, q));

// Part 2

let a = "11001010";
let b = "01010011";
let n = a.length;

let x = "";
let y = "";
let z = "";

let bin_operations = (a, b, n) => {
  for (let i = 0; i < n; i++) {
    let c_or = a[i] === "1" || b[i] === "1" ? "1" : "0";
    x += c_or;

    let c_and = a[i] === "1" && b[i] === "1" ? "1" : "0";
    y += c_and;

    let c_xor = a[i] !== b[i] ? "1" : "0";
    z += c_xor;
  }
};
bin_operations(a,b,n);
console.log("OR result: " + x + "| AND result: " + y + "XOR result: " + z);

module.exports = { XOR, OR, AND };
