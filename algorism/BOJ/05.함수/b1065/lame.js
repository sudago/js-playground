const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 문제푸는 로직을 짜는 함수를 나눠서 짜는 법.
// 재귀 이용하는 법.
// 1000 이상의 숫자 일 때, 등차수열을 구하는 함수.
// return 을 활용하는 법.
// true를 이용하는 법.

solution(+input[0]);

function f(num) {
  const strNum = String(num);
  if (strNum.length <= 2) {
    return true;
  }
  const diff = +strNum[1] - +strNum[0];
  let beforeNum = +strNum[1];
  for (let i = 2; i < strNum.length; i++) {
    if (strNum[i] - beforeNum !== diff) {
      return false;
    }
    beforeNum = +strNum[i];
  }
  return true;
}

function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (f(i)) {
      cnt++;
    }
  }
  console.log(cnt);
}