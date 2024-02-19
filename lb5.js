let A = ["a","b","c"];
let B = ["x","y","z"];
let C = [0,1];
// D = C * A * B

let decard_three = (A,B,C) => {
    let D = [];
    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < A.length; j++) {
            for (let k = 0; k < B.length; k++) {
                D.push([C[i],A[j],B[k]]);   
            }    
        }
    }
    return D
}
let res = ""
const D = decard_three(A,B,C); 
D.forEach((arr)=>{
    res+="| "+ arr + " ";
})
console.log(res);


