const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
console.log(solution(input));

// const input = [];
// require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", (line) => {
//     input.push(line);
//   })
//   .on("close", () => {
//     console.log(solution(input));
//     process.exit();
//   });

function solution(input) {
  const n = +input.shift();
  const splitedInput = input.map(el => el.split(' ')).sort((a, b) => a[0] - b[0]);
  return splitedInput.map(el => el.join(' ')).join('\n');
}


