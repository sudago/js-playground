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
  const n = input.shift();
  const splited = input.map(el => el.split(' ').map(Number));
  let sorted = splited.sort((a, b) => {
    // x가 같지 않으면 x에 대한 오름차순 정렬.
    if (a[0] !== b[0]) return a[0] - b[0];
    // x가 같으면 y에 대한 오름차순 정렬.
    return a[1] - b[1];
  });
  sorted = sorted.join('\n');
  return sorted.replace(/,/g, ' ');
}


