const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
console.log(solution(input));

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


function solution(input) {
  const answer = new Array(26).fill(-1);
  input = input.split('');
  input.forEach((v, i) => {
    if (answer[v.charCodeAt() - 97] === -1) { // 같은 알파벳의 index번호가 이미 먼저 들어와 있다면,
      answer[v.charCodeAt() - 97] = i // ex) a는 아스키 코드 97번이므로 a의 index번호는 0이 된다.
    }
  });

  return answer.join(' ');
}