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
  const splitedInput = input[0].split(' ').map(Number);
  const set = new Set(splitedInput);
  const sortedSetArr = [...set].sort((a, b) => a - b);

  let obj = {};
  sortedSetArr.forEach((e, index) => obj[e] = index);

  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(obj[splitedInput[i]] + ' ');
  }
  return answer.join('');
}

