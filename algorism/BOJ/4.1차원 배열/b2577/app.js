const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0], +input[1], +input[2]);

// javascript스럽게 풀기. 라매개발자.
function solution(a, b, c) {
  const num = a * b * c;
  const strNum = String(num);
  const answer = Array(10).fill(0);

  for (let i = 0; i < strNum.length; i++) {
    const nowChar = +strNum[i];
    answer[nowChar]++;
  }

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}

// function solution(a, b, c) {
//   const stringNum = String(a * b * c);
//   let cnt;
//   for (let i = 0; i <= 9; i++) {
//     cnt = 0;
//     for (let j = 0; j < stringNum.length; j++) {
//       if (String(i) === stringNum[j]) {
//         cnt++;
//       }
//     }
//     console.log(cnt);
//   }
// }
