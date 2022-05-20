const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(s) {
  // 알파벳 소문자 ==> 26 a-z
  // 길이가 26인 배열 answerArray. 배열의 0번째는 a, 배열의 1번째는 b
  // b가 나왔을 때 -> answerArray[1] 현재 배열 돌고 있는 index를 넣어주면 되겠죠?
  // a가 나왔을 때 -> answerArray[0] 현재 배열 돌고 있는 index를 넣어주면 되겠죠?
  // b의 ASCII : 98 - 97 => 1
  // a의 ASCII : 97 - 97 => 0

  let answerArray = new Array(26).fill(-1);
  for (let i = 0; i < s.length; i++) {
    let nowChar = s[i];
    let answerArrayIdx = nowChar.charCodeAt() - 97;
    if (answerArray[answerArrayIdx] === -1) {
      answerArray[answerArrayIdx] = i;
    }
  }

  // let answer = '';
  for (let i = 0; i < answerArray.length; i++) {
    // answer += answerArray[i] + ' ';
    // 얘가 더 성능이 좋다. 
    // 불필요한 answer의 값을 저장 할 공간을 만들지 않아도 되기 때문이다.
    process.stdout.write(answerArray[i] + ' ');
  }
  // console.log(answer);
}