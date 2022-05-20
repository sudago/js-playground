const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input[1] = input[1].split(' ').map(Number);

solution(+input[0], input[1]);

function solution(n, arr) {
  let average = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  for (let i = 0; i < n; i++) {
    average += arr[i] / max * 100;
  }
  average = average / n;
  console.log(average);
}
