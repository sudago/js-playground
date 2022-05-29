const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const { isPrimitive } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const NM = input[0].split(' ').map(Number);
const N = NM[0];
const M = NM[1];

console.log(solution(N, M, input[1]));

function solution(n, m, input) {
  input = input.split(' ').map(Number);
  let max = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = 0;
        sum = input[i] + input[j] + input[k];
        if (sum > max && sum <= m) {
          max = sum;
        }
      }
    }
  }
  return max;
}