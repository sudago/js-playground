const n = 10
const result = 3;


console.log(solution(n));


function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
