const { readInput, getAreaPlusExtra, getRibbon, } = require('../../helper.js');
// get path from parameters
const file = process.argv[2] ? process.argv[2] : '2015/day2/input.txt';

sizes = readInput(file).split('\n');
const paper = sizes.reduce((acc, cur) => { acc += getAreaPlusExtra(cur); return acc; }, 0);
console.log(`Santa needs ${paper} square feet of paper`);

const ribbon = sizes.reduce((acc, cur) => { acc += getRibbon(cur); return acc; }, 0);
console.log(`Santa needs ${ribbon} feet of ribbon`);