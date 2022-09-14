const string = 'COMPUTERPROGRAMMING';
const S = 'R'

console.log(solution(string, S));

function solution(string, S) {
  let answer = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === S) answer++;
  }

  return answer;
}