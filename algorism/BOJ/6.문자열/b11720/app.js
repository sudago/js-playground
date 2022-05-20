const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];
const stringN = input[1];

solution(n, stringN);

function solution(n, stringN) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += +stringN[i];
  }
  console.log(ans);
}
