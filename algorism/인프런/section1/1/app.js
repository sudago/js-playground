console.log(solution(6, 5, 11));



function solution(a, b, c) {
  let min = 0;

  if (a < b) min = a;
  else min = b;

  if (min > c) min = c;

  return min;
}