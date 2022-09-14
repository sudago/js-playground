// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().split('\n').map(Number);


function sol(input) {
  const n = input.shift();

  const sorted = input.sort((a, b) => a - b);


  let first = input.reduce((acc, v) => acc + v, 0) / n;
  first = +first.toFixed(0) == 0 ? Math.abs(+first.toFixed(0)) : +first.toFixed(0);
  const second = sorted[(sorted.length - 1) / 2];
  const third = getMode(sorted);
  function getMode(arr) {
    if (arr.length === 1) return arr[0];
    const counts = arr.reduce((pv, cv) => {
      pv[cv] = (pv[cv] || 0) + 1;
      return pv;
    }, {});

    const result = [];
    for (let key in counts) {
      result.push([key, counts[key]]);
    }

    result.sort((a, b) => a[0] - b[0]);
    result.sort((a, b) => b[1] - a[1]);

    if (+result[0][1] === +result[1][1]) {
      return +result[1][0];
    } else {
      return +result[0][0];
    }
  }
  const fourth = Math.max(...input) - Math.min(...input);

  let answer = '';
  answer += first + '\n';
  answer += second + '\n';
  answer += third + '\n';
  answer += fourth + '\n';
  return answer;
}


const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
