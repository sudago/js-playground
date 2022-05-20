const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
const result = [5, 6, 3];


console.log(solution(array, commands));

function solution(array, commands) {
  let answer = [];
  for (let z = 0; z < commands.length; z++) {
    // i, k는 인덱스 번호 구하기.
    // j는 추출을 종료할 인덱스 번호.
    let i = commands[z][0] - 1;
    let j = commands[z][1];
    let k = commands[z][2] - 1;

    let result = array.slice(i, j).sort((a, b) => a - b);
    answer.push(result[k]);
  }

  return answer;
}