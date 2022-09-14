// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');
// console.log(solution(input));

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(solution(input));
    process.exit();
  });

function solution(input) {
  const n = input.shift();
  const queue = [];
  const answer = [];
  // input = input.map(el => el.replace('\r', '')); // vscode에서 fs 모듈 사용시 개행문자 제거.
  for (let i = 0; i < n; i++) {
    const command = input[i].split(' ');
    switch (command[0]) {
      case 'push':
        queue.push(+command[1]);
        break;
      case 'pop':
        answer.push(queue[0] ? queue.shift() : -1); // queue가 비어있으면 -1, 아니면 맨 앞 queue에서 빼고 그 수를 출력
        break;
      case 'size':
        answer.push(queue.length);
        break;
      case 'empty':
        answer.push(queue.length ? 0 : 1); // queue가 비어있으면 1, 아니면 0 출력.
        break;
      case 'front':
        answer.push(queue[0] ? queue[0] : -1); // queue의 맨 앞 정수 출력, 비어있으면 -1 출력.
        break;
      case 'back':
        answer.push(queue[0] ? queue[queue.length - 1] : -1); // queue의 맨 뒤 정수 출력, 비어있으면 -1 출력.
        break;
    }
    // console.log('queue: ', queue);
  }
  return answer.join('\n');
}

