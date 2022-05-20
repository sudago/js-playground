const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {
  // 빈 공간을 만들고 거기다가 만들어줘야 시간초과가 안남.
  let sum = '';

  for (let i = 1; i <= n; i++) {
    sum += i + "\n";
  }

  console.log(sum);

}