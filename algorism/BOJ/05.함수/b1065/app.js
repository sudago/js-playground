const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(+input[0]);

function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    const stringI = String(i);
    if (stringI.length <= 2) {
      cnt++;
    }
    if (+stringI[0] - +stringI[1] === +stringI[1] - +stringI[2]) {
      cnt++;
    }
  }
  console.log(cnt);
}