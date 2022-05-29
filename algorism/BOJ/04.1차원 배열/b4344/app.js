const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testcaseC = +input[0];
const items = input.slice(1);

let testcase = [];
for (let i = 0; i < testcaseC; i++) {
  testcase.push(items[i].split(' ').map(Number));
}

solution(testcaseC, testcase);

function solution(C, testcase) {
  // column 열 단위로 쪼개기. 세로.
  for (let i = 0; i < C; i++) {
    let testcaseI = testcase[i];
    let average = 0;
    let cnt = 0;
    let result = 0;
    const C2 = testcaseI[0];
    // row 행 단위로 쪼개서 숫자 세기. 가로.
    for (let j = 1; j < C2; j++) {
      average += testcaseI[j];
    }
    // i행의 평균 점수 구하기.
    let avg = average / C2;

    // i행의 평균 점수보다 높은 사람 세기.
    for (let j = 1; j < C2; j++) {
      if (testcaseI[j] > avg) {
        cnt++;
      }
    }

    // 평균을 넘는 학생의 비율 구하기.
    result = cnt / C2 * 100;
    // toFixed() 메서드 사용해서 소수점 셋째 자리까지 반올림해서 출력.
    result = result.toFixed(3);
    // 결과. 답. 출력.
    console.log(`${result}%`);
  }
}
