const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

testcaseArr = [];
for (let i = 0; i < input.length; i++) {
  // 공백문자열(ex. 개행...)이 들어왔을 때의 처리.
  if (input[i] === '') {
    break;
  }
  let tempValue = input[i].split(' ').map(Number);
  testcaseArr.push({ A: tempValue[0], B: tempValue[1] });
}

solution(testcaseArr);

// while문을 사용한 풀이

function solution(testcaseArr) {
  let A = 0;
  let B = 0;
  let idx = 0;

  while (idx !== testcaseArr.length) {
    A = testcaseArr[idx].A;
    B = testcaseArr[idx].B;
    console.log(A + B);
    idx++;
  }
}

// for문을 사용한 풀이

// function solution(testcaseArr) {
//   for (let i = 0; i < testcaseArr.length; i++) {
//     const { A, B } = testcaseArr[i]
//     console.log(A + B);
//   }
// }
