const { readInput, } = require('../../helper.js');
// get path from parameters
const file = process.argv[2] ? process.argv[2] : '2015/day1/input.txt';

const [...map] = readInput(file);
const floor = map.reduce ((acc, cur) => { cur === '(' ? acc++ : acc--; return acc; }, 0);
console.log(`Santa is on floor ${floor}`);
const basement = map.findIndex((cur, index) => { return map.slice(0, index).reduce((acc, cur) => { cur === '(' ? acc++ : acc--; return acc; }, 0) === -1; });
console.log(`Santa enters the basement at position ${basement}`);