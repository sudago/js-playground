const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map(Number);

solution(items);

function solution(items) {
  let ans = 0;
  let idx = 0;

  for (let i = 0; i < items.length; i++) {
    if (ans < items[i]) {
      ans = items[i];
      idx = i + 1;
    }
  }
  console.log(ans);
  console.log(idx);
}