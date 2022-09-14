const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
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
  const answer = [];
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // 26글자
  const alphabetLower = alphabet.map(el => el.toLowerCase());
  const splitedInput = input.split(' '); // 단어마다 구분해서 배열로 입력.
  splitedInput.forEach(word => {
    word = word.split(''); // 문자마다 구분해서 배열로 입력.
    let temp = '';
    word.forEach(char => { // 각 문자가 (= 각 알파벳이)
      if (!isNaN(char)) { // 숫자일 때
        temp += char;
      } else if (char === char.toUpperCase()) { // 영어 대문자일 때
        temp += alphabet[(alphabet.indexOf(char) + 13) % 26];
      } else if (char === char.toLowerCase()) { // 영어 소문자일 때
        temp += alphabetLower[(alphabetLower.indexOf(char) + 13) % 26];
      }
    });
    answer.push(temp);
  });
  return answer.join(' '); // 단어마다 나뉘어져있는 공간에 공백열을 집어넣어 합친다.
}