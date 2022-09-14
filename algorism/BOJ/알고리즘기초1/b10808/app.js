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


function solution(input) {
  const answer = new Array(26).fill(0);
  input = input.split('');
  input.map(el => answer[el.charCodeAt() - 97] += 1);

  return answer.join(' ');
}