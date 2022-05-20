const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

solution(input);

function solution(input) {
  let range = 1;
  let block = 1;

  while (block < input) {
    block += 6 * range;
    range++;
  }
  console.log(range);
}