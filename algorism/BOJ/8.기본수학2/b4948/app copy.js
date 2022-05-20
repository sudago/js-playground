const fs = require('fs');
const { isPrimitive } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let answer = '';

  while (1) {
    let n = +input[]
  }
}