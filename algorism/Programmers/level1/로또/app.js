const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));

function solution(lottos, win_nums) {
  let answer = [];
  const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
  const zero = lottos.filter(lotto => lotto === 0).length;

  const min = 7 - correct >= 6 ? 6 : 7 - correct;
  const max = min - zero <= 1 ? 1 : min - zero;

  answer.push(max, min);
  return answer;
}