// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().split('\n');
// console.log(solution(input));


let input = [];
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
  input = input.map(el => el.replace('\r', '')); // vscode에서 fs모듈 사용시 개행 제거.
  const answer = [];
  for (let i = 0; i < input.length; i++) {
    let lower = 0;
    let upper = 0;
    let num = 0;
    let blank = 0;
    for (let j = 0; j < input[i].length; j++) {
      const str = input[i][j];
      if (str === ' ') blank++;
      else if (str === String(+str)) num++;
      else if (str === str.toLowerCase()) lower++;
      else if (str === str.toUpperCase()) upper++;
    }
    answer.push(`${lower} ${upper} ${num} ${blank}`);
  }
  return answer.join('\n');
}



