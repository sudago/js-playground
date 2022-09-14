const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
console.log(solution(input));

// let input = [];
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
  const deque = [];
  input = input.map((el) => el.replace('\r', '')); // vscode 사용시, fs모듈에서 개행 제거.

  const command = {
    push_front: (x) => deque.unshift(x),
    push_back: (x) => deque.push(x),
    pop_front: () => deque[0] ? deque.shift() : -1,
    pop_back: () => deque[0] ? deque.pop() : -1,
    size: () => deque.length,
    empty: () => deque.length ? 0 : 1,
    front: () => deque[0] ? deque[0] : -1,
    back: () => deque[0] ? deque[deque.length - 1] : -1,
  }
  const answer = [];

  for (let i = 0; i < n; i++) {
    const splitedI = input[i].split(' ');
    if (!command[input[i]]) {
      if (splitedI[0] === 'push_front') {
        command.push_front(splitedI[1]);
      } else if (splitedI[0] === 'push_back') {
        command.push_back(splitedI[1]);
      }
    } else {
      answer.push(command[input[i]]());
    }
  }
  return answer.join('\n');
}