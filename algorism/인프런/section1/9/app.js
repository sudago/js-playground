const input = 'BANANA';

console.log(solution(input));

function solution(s) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') answer += '#';
    else answer += s[i];
  }

  return answer;
}