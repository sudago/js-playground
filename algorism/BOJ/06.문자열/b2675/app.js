const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arr = input;
const num = +input.shift();

solution(num, arr);

// NaN 출력됨.
function solution(n, arr) {
  // column 열 구하기.
  for (let i = 0; i < n; i++) {
    const R = +arr[i].split(' ')[0];
    const strArr = arr[i].split(' ')[1];
    let sum = '';
    // 문자열의 index 구하기.
    for (let j = 0; j < strArr.length; j++) {
      // r만큼 반복하기.
      for (let z = 0; z < R; z++) {
        sum += strArr[j];
      }
    }
    console.log(sum);
  }
}