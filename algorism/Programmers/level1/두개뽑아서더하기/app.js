const numbers = [2, 1, 3, 4, 1];
const result = [2, 3, 4, 5, 6, 7];


console.log(solution(numbers));

function solution(numbers) {
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add((numbers[i] + numbers[j]));
    }
  }

  const answer = [...set];
  answer.sort((a, b) => a - b);

  return answer;
}