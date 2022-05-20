const n = 45;
const result = 7;


console.log(solution(n));


function solution(n) {
  let answer = n.toString(3).split('').reverse().join('');
  return parseInt(answer, 3);
}
