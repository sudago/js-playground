const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const len = input.shift();

for (let i = 0; i < len; i++) {
  const splited = input[i].split(' ');
  console.log(splited.map(el => el.split('').reverse().join('')).join(' '));
}
