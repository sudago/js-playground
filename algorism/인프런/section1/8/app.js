const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((acc, v) => acc + v, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - arr[i] - arr[j] == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer.join(' ');
}