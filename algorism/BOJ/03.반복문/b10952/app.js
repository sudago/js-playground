const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

testcaseArr = [];
for (let i = 0; i < input.length; i++) {
  let tempValue = input[i].split(' ').map(Number);
  testcaseArr.push({ A: tempValue[0], B: tempValue[1] });
}

solution(testcaseArr);

// while문을 사용한 풀이

function solution(testcaseArr) {
  let { A, B } = testcaseArr[0];
  let idx = 1;

  while (A !== 0 || B !== 0) {
    console.log(A + B);
    A = testcaseArr[idx].A;
    B = testcaseArr[idx].B;
    idx++;
  }
}

// for문을 사용한 풀이

// function solution(testcaseArr) {
//   for (let i = 0; i < testcaseArr.length; i++) {
//     const { A, B } = testcaseArr[i]

//     if (A === 0 && B === 0) {
//       break;
//     } else {
//       console.log(A + B);
//     }
//   }
// }
