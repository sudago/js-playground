const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

testcaseArr = [];
for (let i = 1; i <= +input[0]; i++) {
  const testcase = input[i].split(' ').map(Number);
  testcaseArr.push({ A: testcase[0], B: testcase[1] });
}

solution(+input[0], testcaseArr);

function solution(T, testcase) {
  for (let i = 0; i < T; i++) {
    const { A, B } = testcase[i];
    console.log(`Case #${i + 1}: ${A} + ${B} = ${A + B}`);
  }
}