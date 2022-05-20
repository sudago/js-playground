const answers = [1, 2, 3, 4, 5];
const returns = [1];


console.log(solution(answers));

function solution(answers) {
  let answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (first[i % 5] === answers[i]) count[0]++;
    if (second[i % 8] === answers[i]) count[1]++;
    if (third[i % 10] === answers[i]) count[2]++;
  }

  const max = Math.max(...count);

  for (let i = 0; i < count.length; i++) {
    if (max === count[i]) {
      // answer[i] = i + 1; 제출 시 실패 뜸. 왜지?
      answer.push(i + 1);
    }
  }

  return answer;
}