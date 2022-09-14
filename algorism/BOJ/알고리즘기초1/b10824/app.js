const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
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


function solution(input) {
  const [A, B, C, D] = input.split(' ');
  return Number(A + B) + Number(C + D);
}