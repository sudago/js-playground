const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = input.shift();
solution(input[0]);

function solution(input) {
  let answer = 0;
  let arr = input.split(' ').map(Number);
  arr.forEach(x => {
    let cnt = 0;
    console.log(x);
    for (let i = 1; i < x; i++) {
      if (x % i === 0) {
        cnt++;
      }
    }
    if (cnt === 1) {
      answer++;
    }
  });
  console.log(answer);
}
