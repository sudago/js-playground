const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

function solution(input) {
  let answer = '';
  for (let i = 0; i < input.length; i++) {
    if (+input[i] === 0) break;
    const n = +input[i];
    let cnt = 0;
    for (let j = n + 1; j <= 2 * n; j++) {
      if (isPrime(j)) {
        cnt++;
      }
    }
    answer += `${cnt}\n`;
  }
  return answer.slice(0, -1);
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(solution(input));
console.log(0 % 26)