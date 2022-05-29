const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {

  for (let t = 1; t <= +input[0]; t++) {
    input[t] = input[t].split(' ');
    const h = +input[t][0];
    // w는 사실상 사용 하지 않음.
    const w = +input[t][1];
    const n = +input[t][2];

    const floor = n % h === 0 ? h : n % h;
    const roomNum = n % h === 0 ? n / h : Math.ceil(n / h);

    console.log(roomNum < 10 ? `${floor}0${roomNum}` : `${floor}${roomNum}`);
  }
}