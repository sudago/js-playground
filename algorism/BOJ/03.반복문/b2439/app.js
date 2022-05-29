const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {

  // 출력할 줄(행)의 갯수
  for (let line = 1; line <= n; line++) {
    let starCnt = line;
    let spaceCnt = n - line;

    // 문자열을 넣을 공백 문자열 생성
    let printString = '';

    // 빈칸 생성
    for (let i = 1; i <= spaceCnt; i++) {
      printString += ' ';
    }

    // 별 생성
    for (let i = 1; i <= starCnt; i++) {
      printString += '*';
    }

    console.log(printString);
  }
}