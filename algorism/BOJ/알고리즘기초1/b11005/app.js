// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString();
// console.log(solution(input));

let input = '';
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input = line;
  })
  .on("close", () => {
    console.log(solution(input));
    process.exit();
  });


// 1번
// function solution(input) {
//   const [N, B] = input.split(' ').map(Number);
//   return N.toString(B).toUpperCase();
// }


// 2번
function solution(input) {
  const [N, B] = input.split(' ');
  let sum = N;
  let answer = [];
  while (sum !== 0) {
    answer.push(sum % B);
    sum = Math.floor(sum / B);
  }

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] >= 10 && answer[i] <= 35) {
      answer[i] = String.fromCharCode(+answer[i] + 55);
    }
  }

  return answer.reverse().join('');
}