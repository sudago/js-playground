const { count } = require('console');
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];
let line = [];

makeStars(num);
console.log(line.join(''));

function makeStars() {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    line.push('\n');
  }
}

function star(i, j, num) {
  if (i % 3 == 1 && j % 3 == 1) {
    line.push(' ');
  } else {
    if (num == 1) {
      line.push('*');
    } else {
      star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
}