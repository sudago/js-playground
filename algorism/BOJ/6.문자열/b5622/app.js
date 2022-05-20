const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input[0]);

function solution(str) {
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'W') {
      ans += 9;
    } else if (str[i] >= 'T') {
      ans += 8;
    } else if (str[i] >= 'P') {
      ans += 7;
    } else if (str[i] >= 'M') {
      ans += 6;
    } else if (str[i] >= 'J') {
      ans += 5;
    } else if (str[i] >= 'G') {
      ans += 4;
    } else if (str[i] >= 'D') {
      ans += 3;
    } else if (str[i] >= 'A') {
      ans += 2;
    } else if (str[i] < 'A') {
      ans += 1;
    }
    ans += 1;
  }
  console.log(ans);
}