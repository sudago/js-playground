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

  let set = Array.from(new Set(input)); // set을 이용해서 같은 것 없애기.
  let sorted = set.sort((a, b) => a.length - b.length); // 길이가 짧은 것 순서대로 정렬.
  let arr = [];

  // 길이가 같으면 사전 순으로 정렬.
  for (let i = 1; i <= sorted[sorted.length - 1].length; i++) {
    let temp = sorted.filter((el) => el.length === i);
    arr.push(...temp.sort());
  }

  // 문자열로 출력
  return arr.join('\n');
  // return arr.reduce((acc, v) => acc += v + '\n', '');
}


