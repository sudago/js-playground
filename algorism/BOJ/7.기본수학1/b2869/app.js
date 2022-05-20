const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

solution(input);

function solution(input) {
  const A = +input[0];
  const B = +input[1];
  const V = +input[2];

  console.log(Math.ceil((V - B) / (A - B)));
}