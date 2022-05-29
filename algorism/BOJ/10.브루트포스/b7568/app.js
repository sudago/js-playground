const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const { isPrimitive } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = Number(input.shift());
let arr = [];
for (let i = 0; i < n; i++) {
  let splitedInput = input[i].split(' ').map(Number);
  arr.push(splitedInput);
}

// 열심히 짰지만 틀린 풀이.
console.log(solution(n, arr));

function solution(n, arr) {
  let maxWeight = arr[0][0];
  let maxHeight = arr[0][1];
  let minWeight = arr[0][0];
  let minHeight = arr[0][1];
  for (let i = 1; i < n; i++) {
    if (arr[i][0] > maxWeight) {
      maxWeight = arr[i][0];
    }
    if (arr[i][1] > maxHeight) {
      maxHeight = arr[i][1];
    }
    if (arr[i][0] < minWeight) {
      minWeight = arr[i][0];
    }
    if (arr[i][1] < minHeight) {
      minHeight = arr[i][1];
    }
  }

  let answer = '';
  for (let i = 0; i < n; i++) {
    answer += compareGrade(i, maxWeight, maxHeight, minWeight, minHeight, arr, n) + ' ';
  }
  return answer;
  // console.log(maxWeight, maxHeight, minWeight, minHeight);
}

function compareGrade(i, mW, mH, miW, miH, arr, n) {
  const W = arr[i][0];
  const H = arr[i][1];
  if (W == mW && H == mH) {
    return 1;
  }
  if (W == miW && H == miH) {
    return n;
  } else if (W < mW && H < mH) {
    return 2;
  }
}