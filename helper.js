const fs = require('fs');

function readInput(fileName) {
    return fs.readFileSync(fileName, 'utf8')
}

function splitLines(data) {
    return data.split('\n');
}

function splitSpace(data) {
    return data.split(' ');
}

function sortDesc (data) {
    return data.sort((a, b) => b - a);
}

function sum(data) {
    return data.reduce((p, c) => p + c, 0);
}
function product(data) {
    return data.reduce((p, c) => p * c, 1);
}

function sumSome(data, n) {
    return sum(data.slice(0, n));
}

// First Column A for rock B for Paper C for Scissors
// Second Column X for rock Y for Paper Z for Scissors
// Score is 1 for Rock, 2 for Paper, 3 for Scissors plus 6 for win, 3 for draw, 0 for loss
// Calculate the score for each game following the input guides
function rockPaperScissors(data) {
    let score = 0;
    const [first, second] = data.split(' ');
    if (first === 'A' && second === 'X') {
        score += 1+3;
    } else if (first === 'A' && second === 'Y') {
        score += 2+6;
    } else if (first === 'A' && second === 'Z') {
        score += 3+0;
    } else if (first === 'B' && second === 'X') {
        score += 1+0;
    } else if (first === 'B' && second === 'Y') {
        score += 2+3;
    } else if (first === 'B' && second === 'Z') {
        score += 3+6;
    } else if (first === 'C' && second === 'X') {
        score += 1+6
    } else if (first === 'C' && second === 'Y') {
        score += 2+0;
    } else if (first === 'C' && second === 'Z') {
        score += 3+3;
    }
    return score;
}

// First Column A for rock B for Paper C for Scissors
// Second Column X for LOSE Y for DRAW Z for WIN
// Score is 1 for Rock, 2 for Paper, 3 for Scissors plus 6 for win, 3 for draw, 0 for loss
// Calculate the score for each game following the input guides
function rPsCristalBall(data) {
    let score = 0;
    const [first, second] = data.split(' ');
    if (first === 'A' && second === 'X') {
        score += 3+0;
    } else if (first === 'A' && second === 'Y') {
        score += 1+3;
    } else if (first === 'A' && second === 'Z') {
        score += 6+2;
    } else if (first === 'B' && second === 'X') {
        score += 1+0;
    } else if (first === 'B' && second === 'Y') {
        score += 2+3;
    } else if (first === 'B' && second === 'Z') {
        score += 3+6;
    } else if (first === 'C' && second === 'X') {
        score += 2+0
    } else if (first === 'C' && second === 'Y') {
        score += 3+3;
    } else if (first === 'C' && second === 'Z') {
        score += 6+1;
    }
    return score;
}

function getAreaPlusExtra(data) {
    const [l, w, h] = data.split('x').map(Number);
    const area = [l*w*2, w*h*2, h*l*2];
    const extra = area.sort((a, b) => a - b).slice(0, 1)/2;
    const result = (sum(area) + extra);
    return result;
}

function getRibbon(data) {
    const [l, w, h] = data.split('x').map(Number);
    const ribbon = sum([l*2, w*2, h*2].sort((a, b) => a - b).slice(0, 2));
    const bow = product([l, w, h]);
    const result = ribbon + bow;
    return result;

}

function niceOrNaughty (string) {
    const vowels = string.match(/[aeiou]/g);
    const double = string.match(/([a-z])\1/g);
    const naughty = string.match(/ab|cd|pq|xy/g);
    if (vowels && vowels.length >= 3 && double && double.length >= 1 && !naughty) {
        return true;
    }
    return false;
}

function niceOrNaughty2 (string) {
    const double = string.match(/([a-z]{2}).*\1/g);
    const repeat = string.match(/([a-z]).\1/g);
    if (double && repeat) {
        return true;
    }
    return false;
}

module.exports = {
    readInput,
    splitLines,
    sortDesc,
    sum,
    sumSome,
    splitSpace,
    rockPaperScissors,
    rPsCristalBall,
    getAreaPlusExtra,
    getRibbon,
    niceOrNaughty,
    niceOrNaughty2,
}