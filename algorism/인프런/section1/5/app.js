// [5, 7, 1, 3, 2, 9, 11]
const input = '5 3 7 11 2 15 17';
console.log(solution(input));

function solution(input) {
  const numbers = input.split(' ').map(Number);

  // // Number.MAX_SAFE_INTEGER === 9007199254740991
  // let min = Number.MAX_SAFE_INTEGER;
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] < min) min = numbers[i];
  // }

  // return min;
  return Math.min(...numbers);
}