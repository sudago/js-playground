const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


solution(input[0], input[1]);

function solution(a, b) {
  let a2 = '';
  let b2 = '';
  for (let i = 2; i >= 0; i--) {
    a2 += a[i];
    b2 += b[i];
  }
  if (a2 > b2) {
    console.log(a2);
  } else {
    console.log(b2);
  }
}