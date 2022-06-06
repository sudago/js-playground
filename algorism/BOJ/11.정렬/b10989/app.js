const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(Number);

const n = input.shift();


let arr = new Array(n + 1).fill(0);
let sum = 0;
for (let i = 0; i < n; i++) {
  arr[input[i]]++;
  sum++;
}

let answer = new Array(n + 1).fill(0);
for (let i = arr.length; i > 0; i--) {
  while (arr[i] > 0) {
    answer[sum] = i;
    arr[i]--;
    sum--;
  }
}


let result = '';
for (let i = 1; i <= n; i++) {
  result += answer[i] + '\n';
}

if (answer.length == 0) {
  console.log(-1);
} else {
  console.log(result);
}
