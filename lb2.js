

//(p ^ q) XOR (p ^ r)  

let p, q, r;

const expression = (a, b, c) => !( ( a&&b ) || ( a&&c ));

function truth_table (){

    const true_false = x => x ? 'T':'F';
    console.log("| P | Q | R | (P^Q) XOR (P ^ R) |");
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {

            const a = !!i, b = !!j, c = !!k;

            console.log(`| ${true_false(a)} | ${true_false(b)} | ${true_false(c)} | ${true_false(expression(a, b, c))}                 |`);

            }
        }
    }

}

truth_table();

