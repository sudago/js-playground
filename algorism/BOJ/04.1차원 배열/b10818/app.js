const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
inputN = +input[0];
inputArr = input[1].split(' ').map(Number);

solution(inputN, inputArr);

function solution(n, arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < n; i++) {
    arrI = arr[i];

    if (min > arrI) {
      min = arrI;
    }
    if (max < arrI) {
      max = arrI;
    }
  }
  console.log(min, max);
}