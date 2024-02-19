
let n = 5;
let U = [4, 2, 3, 1, 5];

let A = [2, 4, 5];
let B = [1, 3, 4, 5];

U.sort((a, b) => a - b);

let Abit = Array.from({ length: n }, (_, i) => (A.includes(U[i]) ? 1 : 0));
let Bbit = Array.from({ length: n }, (_, i) => (B.includes(U[i]) ? 1 : 0));

console.log("Універсум U:", U);
console.log("Множина A:", A);
console.log("Бітовий рядок множини A:", Abit);
console.log("Множина B:", B);
console.log("Бітовий рядок множини B:", Bbit);

let NOT_A_result = Abit.map((bitA) => bitA? 0 : 1);
let XOR_result = Abit.map((bitA, i) => bitA ^ Bbit[i]);
let OR_result = Abit.map((bitA, i) => bitA | Bbit[i]);
let AND_result = Abit.map((bitA, i) => bitA & Bbit[i]);

console.log("Операція !A:", NOT_A_result);
console.log("Операція XOR для A та B:", XOR_result);
console.log("Операція OR для A та B:", OR_result);
console.log("Операція AND для A та B:", AND_result);
