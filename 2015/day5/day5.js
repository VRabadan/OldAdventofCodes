const { readInput, niceOrNaughty, niceOrNaughty2 } = require('../../helper.js');
// get path from parameters
const file = process.argv[2] ? process.argv[2] : '2015/day5/input.txt';

strings = readInput(file).split('\n');

const nicestrings = strings.reduce((acc, c) => { niceOrNaughty(c) === true ? acc +=1 : null ; return acc;}, 0);
console.log(`There are ${nicestrings} nice strings`);

const nicestrings2 = strings.reduce((acc, c) => { niceOrNaughty2(c) === true ? acc +=1 : null ; return acc;}, 0);
console.log(`There are ${nicestrings2} improved nice strings`);