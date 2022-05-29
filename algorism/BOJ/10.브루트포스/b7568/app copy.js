const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const { isPrimitive } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = input.shift();
const WH = input.map(el => el.split(' ').map(Number));

console.log(solution(n, WH));

function solution(n, WH) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        if (WH[i][0] < WH[j][0] &&
          WH[i][1] < WH[j][1]) {
          cnt++;
        }
      }
    }
    result.push(cnt);
  }
  return result.join(' ');
}