const { readInput, } = require('../../helper.js');
// get path from parameters
const file = process.argv[2] ? process.argv[2] : '2015/day3/input.txt';

const [...map] = readInput(file);
const houses = new Set();
let x = 0;
let y = 0;
houses.add(`${x},${y}`);
map.forEach((cur) => {
    cur === '^' ? y++ : cur === 'v' ? y-- : cur === '<' ? x-- : cur === '>' ? x++ : null;
    houses.add(`${x},${y}`);
});
console.log(`Santa visits ${houses.size} houses`);

const houses2 = new Set();
let Sx = 0;
let Sy = 0;
let Rx = 0;
let Ry = 0;
houses2.add(`${Sx},${Sy}`);
map.forEach((cur, index) => {
    if (index % 2 === 0) {
    cur === '^' ? Ry++ : cur === 'v' ? Ry-- : cur === '<' ? Rx-- : cur === '>' ? Rx++ : null;
    houses2.add(`${Rx},${Ry}`);
    } else {
    cur === '^' ? Sy++ : cur === 'v' ? Sy-- : cur === '<' ? Sx-- : cur === '>' ? Sx++ : null;
    houses2.add(`${Sx},${Sy}`);
    }
});
console.log(`Santa and Robo-Santa visit ${houses2.size} houses`);