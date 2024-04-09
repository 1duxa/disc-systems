
//(p ^ q) XOR (p ^ r)  
const expression = (a, b, c) => !( ( a&&b ) || ( a&&c ));
const true_false = x => x ? 'T':'F';

function truth_table (){

   
    console.log("| P | Q | R | (P^Q) XOR (P ^ R) |");
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {

            console.log(`| ${true_false(i)} | ${true_false(j)} | ${true_false(k)} | ${true_false(expression(i, j, k))}                 |`);

            }
        }
    }

}

truth_table();

module.exports = {expression};
