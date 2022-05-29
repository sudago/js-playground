const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = +input[0];

solution(input);

function solution(num) {
  if (90 <= num && num <= 100) {
    console.log('A');
  } else if (80 <= num && num < 90) {
    console.log('B');
  } else if (70 <= num && num < 80) {
    console.log('C');
  } else if (60 <= num && num < 70) {
    console.log('D');
  } else if (num < 60) {
    console.log('F');
  }
}
