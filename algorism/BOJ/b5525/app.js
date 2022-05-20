const fs = require('fs');
const { isPrimitive } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

console.log(solution(+input[0], +input[1], input[2]));

function solution(n, m, s) {
  let stringN = '';
  for (let i = 0; i < n; i++) {
    stringN += 'IO';
  }
  stringN += 'I';

  for (let i = 0; i < m; i++) {
    let splitedS = s.split('');
    if (splitedS[i] === 'I') {
      for (let j = i; j <= i + n + 2; j++) {
        splited[i]
      }
    }
  }

  return splitedS;
}