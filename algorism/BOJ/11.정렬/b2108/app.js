const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(Number);

const n = input.shift();

const sorted = input.sort((a, b) => a - b);


let first = Math.round(input.reduce((acc, v) => acc + v, 0) / n);
first = first == 0 ? Math.abs(first) : first;
const second = sorted[(n - 1) / 2];
const third = () => {
  const counts = sorted.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});

  const max = Math.max.apply(null, Object.values(counts));
  const result = [];
  for (let key in counts) {
    if (counts[key] === max) {
      result.push(key);
    }
  }
  if (result.length > 1) {
    return +result.sort((a, b) => a - b)[1];
  } else {
    return +result[0];
  }
};
const fourth = sorted[n - 1] - sorted[0];


console.log(first);
console.log(second);
console.log(third());
console.log(fourth);
