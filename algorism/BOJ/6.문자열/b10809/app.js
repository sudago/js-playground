const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 입력받은 값과, az의 알파벳 값을 비교하는 함수 짜기.
// 입력받은 값의 위치를 확인한다. index number 구하기.
// az의 배열에 입력받은 값의 index number를 출력하는 함수 짜기.

solution(input[0]);

function solution(S) {
  // 알파벳 개수 세기.
  // 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  const az = 26;
  // az 배열에 전부 -1를 넣기.
  const answerArr = new Array(az).fill(-1);

  for (let i = 0; i < S.length; i++) {
    let answerArrIdx = S[i].charCodeAt() - 97;
    if (answerArr[answerArrIdx] === -1) {
      answerArr[answerArrIdx] = i;
    }
  }

  for (let i = 0; i < answerArr.length; i++) {
    process.stdout.write(answerArr[i] + ' ');
  }
}