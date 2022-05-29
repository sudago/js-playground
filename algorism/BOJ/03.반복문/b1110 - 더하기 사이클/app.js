// 와 내 힘으로 풀었다. 너무 뿌듯하다..!!!

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {
  let makeNum = n;
  let cnt = 0;
  let ten;
  let one;
  while (makeNum !== n || cnt === 0) {
    if (makeNum < 10) {
      ten = 0;
      one = makeNum;
    } else {
      ten = Number(String(makeNum)[0]);
      one = Number(String(makeNum)[1]);
    }

    makeNum = ten + one;
    ten = one;
    one = makeNum % 10;
    cnt++;
    makeNum = Number(String(ten) + String(one));
  }
  console.log(cnt);
}