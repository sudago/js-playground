const { reverse } = require('dns');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const len = input[0];
for (let i = 1; i <= len; i++) {
  const answer = [];
  const splited = input[i].split(' ');
  for (let j = 0; j < splited.length; j++) {
    if (j === splited.length - 1) {
      answer.push(splited[j].replace('\r', '').split('').reverse().join(''));
    } else {
      answer.push(splited[j].split('').reverse().join(''));
    }
  }
  console.log(answer.join(' '));
}
