const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = input.shift();

solution(n, input);

function solution(n, input) {
  const answer = input.map(Number).sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    console.log(answer[i]);
  }
}