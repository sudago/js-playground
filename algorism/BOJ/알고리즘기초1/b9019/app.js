const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
console.log(solution(input));

// let input = [];
// require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", (line) => {
//     input.push(line);
//   })
//   .on("close", () => {
//     console.log(solution(input));
//     process.exit();
//   });


function solution(input) {
  input.shift();
  const answer = [];
  const bfs = (start, end) => {
    const visited = new Array(10000).fill(false);
    visited[start] = true;
    const queue = [[start, '']];

    while (queue.length) {
      const [cur, path] = queue.shift();
      if (cur === end) {
        answer.push(path);
        return;
      }

      const nextD = (cur * 2) % 10000;
      if (!visited[nextD]) {
        visited[nextD] = true;
        queue.push([nextD, path + 'D']);
      }

      const nextS = cur === 0 ? 9999 : cur - 1;
      if (!visited[nextS]) {
        visited[nextS] = true;
        queue.push([nextS, path + 'S']);
      }

      const nextL = (cur % 1000) * 10 + Math.floor(cur / 1000);
      if (!visited[nextL]) {
        visited[nextL] = true;
        queue.push([nextL, path + 'L']);
      }

      const nextR = (cur % 10) * 1000 + Math.floor(cur / 10);
      if (!visited[nextR]) {
        visited[nextR] = true;
        queue.push([nextR, path + 'R']);
      }

    }
  }

  input.forEach(el => {
    const [start, end] = el.split(' ').map(Number);
    bfs(start, end);
  });
  return answer.join('\n');
}