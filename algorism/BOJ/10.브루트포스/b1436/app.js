const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const { isPrimitive } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

console.log(solution(+input[0]));

function solution(input) {
  let num = '665';

  while (input > 0) {
    num++;

    if (num.toString().includes('666')) {
      input--;
    }
  }

  return num;
}