const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


// console.log(input[0].charCodeAt());

// 함수 짜기. 라매 개발자.
solution(input[0]);

function solution(char) {
  console.log(char.charCodeAt());
}