const fs = require('fs');
const { isPrimitive } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

console.log(solution(input));

let TC = 0;
function solution(input) {
  let answer = '';

  while (1) {
    let n = +input[TC++];
    if (n === 0) break;

    let cnt = 0;
    for (let i = n + 1; i <= 2 * n; i++) {
      if (isPrime(i)) cnt++;
    }
    answer += cnt + '\n';

  }
  return answer;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}