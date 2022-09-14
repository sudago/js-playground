const input = '12, 77, 38, 41, 53, 92, 85';

const numbers = input.split(', ').map(Number);

let min = Number.MAX_SAFE_INTEGER;
let plus = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    plus += numbers[i];
    if (numbers[i] < min) min = numbers[i];
  }
}

console.log(plus);
console.log(min);