
// 13, 33, 17
// 6, 7, 11
console.log(solution(13, 33, 17));

function solution(a, b, c) {
  let max;

  if (a < b) max = b;
  else max = a;

  if (max < c) max = c;

  // 수정한 부분. 원래는 a, b, c 돌아가면서 max의 값과 같은지 확인했다.
  let total = a + b + c;
  total -= max;

  return total > max ? 'YES' : 'NO';
}