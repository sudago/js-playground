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
  const answer = [];
  for (let i = 0; i < n; i++) {
    const inputI = input[i].replace('\r', '');
    answer.push(findPair(inputI));
  }
  return answer.join('\n');
}


function findPair(input) {
  input = input.split('');
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ')') {
      if (input[i - 1] === '(') {
        input.splice(i, 1);
        input.splice(i - 1, 1);
        i = 0;
      } else {
        return 'NO';
      }
    }
  }
  if (input.length === 0) {
    return 'YES';
  } else {
    return 'NO';
  }
}

