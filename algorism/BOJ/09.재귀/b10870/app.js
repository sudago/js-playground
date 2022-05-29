const { count } = require('console');
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

console.log(solution(+input[0]));

// 재귀를 이용한 풀이. solution함수명은 fibonacci로 하는게 더 낫다.
function solution(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return solution(n - 1) + solution(n - 2);
}

// for문을 이용한 풀이
// function solution(n) {
//   let result = 0;
//   let num = 1;
//   for (let i = 1; i <= n; i++) {
//     result += num;
//     num = result;
//   }
//   return result;
// }