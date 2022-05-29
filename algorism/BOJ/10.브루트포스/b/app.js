const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const { isPrimitive } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

console.log(solution(input));

function solution(input) {
  [size, ...arr] = input;
  [M, N] = size.split(' ').map(Number);
  arr = arr.map(str => str.trim('\r'));

  const answer = [];
  const BW = ['WBWBWBWB', 'BWBWBWBW'];

  for (let i = 0; i <= M - 8; i++) { // 세로줄
    for (let j = 0; j <= N - 8; j++) { // 가로줄
      for (let z = 0; z < 2; z++) { // 두가지 패턴
        answer.push(boardCnt(arr, i, j, z, BW));
      }
    }
  }
  return Math.min(...answer);
}


function boardCnt(arr, col, row, patN, BW) {
  let cnt = 0;
  for (let y = 0; y < 8; y++) { // y축
    for (let x = 0; x < 8; x++) { // x축
      if (arr[col + y][row + x] !== BW[(y + patN) % 2][x]) {
        cnt++;
      }
    }
  }
  return cnt;
}