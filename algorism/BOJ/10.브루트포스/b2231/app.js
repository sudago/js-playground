const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const { isPrimitive } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

console.log(solution(+input[0]));

function solution(N) {
  for (let i = 1; i < N; i++) {
    if (makeN(i) === N) {
      return i;
    }
  }
  return 0;
}

function makeN(x) {
  let answer = x;
  const stringX = String(x);
  for (let i = 0; i < stringX.length; i++) {
    answer += Number(stringX[i]);
  }
  return answer;
}