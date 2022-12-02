const { readInput, } = require('../../helper.js');

// get path from parameters
const file = process.argv[2] ? process.argv[2] : '2015/day4/input.txt';

const string = readInput(file);
let i = 0;
let hash = '';
while (hash.slice(0, 5) !== '00000') {
    i++;
    hash = require('crypto').createHash('md5').
    update(string + i).
    digest('hex');
}
console.log(`The lowest number is ${i}`);

let j = 0;
let hash2 = '';
while (hash2.slice(0, 6) !== '000000') {
    j++;
    hash2 = require('crypto').createHash('md5').
    update(string + j).
    digest('hex');
}
console.log(`The lowest number for six zeros is ${j}`);