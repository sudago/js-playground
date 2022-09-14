const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(Number);
console.log(solution(input));

// let input = [];
// require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", (line) => {
//     input = line.split(' ').map(Number);
//   })
//   .on("close", () => {
//     console.log(solution(input));
//     process.exit();
//   });


// 주석 처리한 코드가 더 좋다. 
// https://junghyeonsu.tistory.com/241 참고.


function solution(input) {
  let n = input[0];
  let k = input[1];
  let sum = k;
  const arr = [];
  // const queue = [];
  const answer = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
    // queue.push(i);
  }

  while (arr.length) {
    let index = (sum - 1) % n;
    answer.push(arr.splice(index, 1));
    n = arr.length;
    sum = index + k;
  }

  // let cnt = 1;
  // while (queue.length) {
  //   const shiftItem = queue.shift();
  //   if (cnt % k === 0) answer.push(shiftItem);
  //   else queue.push(shiftItem);
  //   cnt++;
  // }
  return `<${answer.join(', ')}>`;
}

