const left = 13;
const right = 17;
const result = 43;


console.log(solution(left, right));

function divisor(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = divisor(i);
    if (count % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

// 13, 14, 15, 16, 17

// Math.sqrt(약수들) % 2 === 0인지 확인.
// true면 answer += 약수
// false면 answer -= 약수

// console.log(arr);