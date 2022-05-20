const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let arr = [];
for (let i = 1; i <= +input[0]; i++) {
  arr.push(input[i]);
}

solution(+input[0], arr);

function solution(n, arr) {

  for (let i = 0; i < n; i++) {
    let cnt = 0;
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {

      if (arr[i][j] === 'O') {
        cnt++;
        sum += cnt;
      } else {
        cnt = 0;
      }
    }
    console.log(sum);
  }
}
