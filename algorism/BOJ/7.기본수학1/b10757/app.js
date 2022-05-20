const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

solution(input);

function solution(input) {
  const A = BigInt(input[0]);
  const B = BigInt(input[1]);
  let answer = A + B;
  // 
  // console.log('Math.pow: ', Math.pow(2, 53) - 1);
  console.log(answer.toString());
}