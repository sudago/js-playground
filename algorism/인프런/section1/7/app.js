// let input = '3\n 25 23 11 47 53 17 33';
let input = '0\n 12 20 54 30 87 91 30';

input = input.split('\n ');
const day = +input[0];
const numbers = input[1].split(' ').map(Number);



function solution(day, arr) {
  let cnt = 0;
  // 내가 짠 식
  // for (let i = 0; i < arr.length; i++) {
  //   if (String(arr[i])[1] == day) cnt++;
  // }

  // 헤답
  for (let x of arr) {
    if (x % 10 == day) cnt++;
  }
  return cnt;
}

console.log(solution(day, numbers));