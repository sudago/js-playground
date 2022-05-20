const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const A = +input[0];
const B = +input[1];
const C = +input[2];

solution(A, B, C);

function solution(A, B, C) {
  const margin = C - B;
  const X = Math.floor(A / margin) + 1;

  if (margin <= 0) {
    console.log(-1);
  } else {
    console.log(X);
  }
}