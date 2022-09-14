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
  let answer = '';
  let word = '';
  input = input.split('');
  let gate = input.length;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '<') { // '<' 일 떄.
      gate = i;
      answer += word.split('').reverse().join('');
      word = '';
      answer += '<';
    } else if (input[i] === '>') { // '>' 일 때.
      answer += '>';
      gate = input.length;
    } else if (gate < i) { // '<'사이의 문자열'>' 일 때.
      answer += input[i];
    } else { // 단어 일 때.
      if (input[i] === ' ') { // 공백열일 때.
        answer += word.split('').reverse().join('') + ' ';
        word = '';
      } else { // 알파벳이나 숫자 일 때.
        word += input[i];
      }
    }
    if (i === input.length - 1 && word.length) { // for문을 끝까지 다 돌고도 word에 문자열이 남아 있을 때.
      answer += word.split('').reverse().join('');
    }
  }
  return answer;
}