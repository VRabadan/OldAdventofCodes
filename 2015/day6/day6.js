const { readInput, splitLines, } = require('../../helper.js');
// get path from parameters
const file = process.argv[2] ? process.argv[2] : '2015/day6/input.txt';
const [...instructions] = splitLines(readInput(file));
------------------- Review UNDER and continue working  ----------------------

const lights = new Array(1000).fill(0).map(() => new Array(1000).fill(0));
instructions.forEach((cur) => {
    const [instruction, ...coords] = cur.split(' ');
    const [x1, y1] = coords[0].split(',').map(Number);
    const [x2, y2] = coords[2].split(',').map(Number);
    for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
            if (instruction === 'turn') {
                lights[x][y] = coords[1] === 'on' ? 1 : 0;
            } else {
                lights[x][y] = lights[x][y] === 1 ? 0 : 1;
            }
        }
    }
});
let count = 0;
lights.forEach((cur) => {
    cur.forEach((cur) => {
        count += cur;
    });
});
console.log(`There are ${count} lights on`);
