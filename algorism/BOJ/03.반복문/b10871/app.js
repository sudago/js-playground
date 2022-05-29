const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [inputN, inputX] = input[0].split(' ').map(Number);
const arrayA = input[1];

// 괄호 안에 세개의 인자를 넣을 수 있다는 것을 알게 되었다.
solution(inputN, inputX, arrayA);

function solution(N, X, A) {
  A = input[1].split(' ').map(Number);
  let answerArray = [];

  for (let i = 0; i < N; i++) {
    if (A[i] < X) {
      answerArray.push(A[i]);
    }
  }
  // join()메서드 사용. 
  // 배열 안의 원소들을 문자열로 만들어주는데, 
  // ()에 아무것도 넣지 않으면 ,쉼표로 구분해준다. - 기본값.
  console.log(answerArray.join(' '));
}