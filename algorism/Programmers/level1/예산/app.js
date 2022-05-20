const d = [1, 3, 2, 5, 4, 4];
const budget = 9;


console.log(solution(d, budget));


function solution(d, budget) {
  let count = 0;
  let result = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    count += d[i];
    result++;
    if (count > budget) {
      result--;
    }
  }
  return result;
}
