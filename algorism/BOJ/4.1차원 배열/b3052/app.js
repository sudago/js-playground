const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map(Number);

solution(input);

// 문제의 의도와는 맞지않는 함수를 짠 것 같다.
// function solution(input) {
//   let arr = [];
//   let cnt = 1;
//   for (let i = 0; i < 10; i++) {
//     arr.push(input[i] % 42);
//   }
//   // 정렬 사용.
//   arr.sort((a, b) => a - b);

//   // 선형 탐색 사용.
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] !== arr[i]) {
//       cnt++;
//     }
//   }
//   console.log(cnt);
// }


// 라매개발자 방법. javascript다운 함수 짜는 법이라고 한다.

function solution(input) {
  let answer = Array(42).fill(0);
  for (let i = 0; i < 10; i++) {
    const nowChar = input[i] % 42;
    answer[nowChar]++;
  }
  let cnt = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== 0) {
      cnt++;
    }
  }
  console.log(cnt);
}

// Set과 size를 사용해서 짠 코드.
// Set에는 중복값을 저장하지 않는다.
// size는 Set과 함께 사용하는데, 값이 몇개인지 출력해준다.

// const input = require('fs').readFileSync(0, 'utf8').toString().trim().split('\n');

// const count = new Set(input.map(x => x % 42)).size;

// console.log(count);