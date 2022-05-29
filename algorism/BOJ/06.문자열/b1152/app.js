const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(str) {
  const strArr = str.split(' ');
  let cnt = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== '') {
      cnt++;
    }
  }
  console.log(cnt);
}