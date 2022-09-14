const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
console.log(solution(input));

// let input = '';
// require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", (line) => {
//     input = line;
//   })
//   .on("close", () => {
//     console.log(solution(input));
//     process.exit();
//   });

// 1번
// function solution(input) {
//   const [N, B] = input.split(' ');
//   return parseInt(N, +B);
// }

// 2번
function solution(input) {
  const [N, B] = input.split(' ');
  let answer = 0;
  const reverseN = N.split('').reverse();
  for (let i = 0; i < N.length; i++) {
    if (reverseN[i] >= 'A' && reverseN[i] <= 'Z') {
      reverseN[i] = reverseN[i].charCodeAt(0) - 55;
      answer += reverseN[i] * Math.pow(B, i); // 거듭제곱. B ** i 도 동일함!
    } else {
      answer += reverseN[i] * Math.pow(B, i);
    }
  }
  return answer;
}