const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let testcaseArr = [];
for (let i = 1; i <= +input[0]; i++) {
  const tempValue = input[i].split(' ').map(Number);
  testcaseArr.push({ A: tempValue[0], B: tempValue[1] });
}
console.log(testcaseArr);

solution(+input[0], testcaseArr);

function solution(T, testcaseArr) {
  for (let i = 0; i < T; i++) {
    // 자바스크립트스럽게 쓰려면 이렇게 쓴다.
    // 객체 구조 분해 할당.
    let { A, B } = testcaseArr[i];

    // let A = testcaseArr[i].A;
    // let B = testcaseArr[i].B;

    console.log(A + B);
  }
}