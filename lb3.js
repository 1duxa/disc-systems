//N = 5    R = 3

// A(R,N) = N! / (N-R)!
let n = 5, r = 3;

let factorial = ( n ) => {

    if (n === 0) { return 1 }
    if (n < 0) {throw Error("Wrong input (value < 0)")}
    return n * factorial(n-1);
}

let A_rn = (n,r) => factorial(n) / factorial(n - r)

console.log( "Result = " + A_rn(n,r) );

// Bells nums i = 2 n = i + 5

let STIRLING_SECOND_KIND = (table) => {
   
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
        
            if(i===j){
              table[i][j] = 1;  
            } else if ( i > j && j > 0 ){
                table[i][j] = (j * table[i - 1][j]) + (table[i - 1][j - 1]); 
            } else{
                table[i][j] = 0
            }    
        
        }
    }

    return table;
};

let logTable = (table) => {
     for (let i = 0; i <= N; i++) {
        console.log(table[i].join('\t |'));
    }
}
    let N = 7, K = 7;
    let table = Array.from(Array(N+1), () => new Array(K+1));

    let resultTable = STIRLING_SECOND_KIND(table);
        
    logTable(resultTable);

    let bells_nums = (table) => {
        let res = 0;

        for (let j = 0; j < table.length; j++) {
            res += table[table.length-1][j];
        }
        return res
    }

    console.log( bells_nums(resultTable) );
