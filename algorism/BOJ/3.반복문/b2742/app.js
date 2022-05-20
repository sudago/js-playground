const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {
  let sum = '';

  for (let i = n; i >= 1; i--) {
    sum += i + "\n";
  }

  console.log(sum);
}