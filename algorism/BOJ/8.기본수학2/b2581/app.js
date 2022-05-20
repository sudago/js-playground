const { count } = require('console');
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0], +input[1]);

function solution(m, n) {
  let answer = 0;
  let arr = [];
  for (let i = m; i <= n; i++) {
    let cnt = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) cnt++;
    }
    if (cnt === 1) {
      answer += i;
      arr.push(i);
    }
  }
  if (answer === 0) {
    console.log(-1);
  } else {
    console.log(answer);
    console.log(arr[0]);
  }
}
