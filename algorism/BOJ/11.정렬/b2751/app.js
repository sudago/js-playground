const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// const [N, ...arr] = input.map(Number);
// const result = arr.sort((a, b) => a - b);
// console.log(result.join('\n'));


// readline 모듈을 이용한 풀이.

// let input = []

// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', function (x) {
//     input.push(x.trim())
//   })
//   .on('close', function () {
//     const [N, ...order] = input.map(Number)
//     const result = order.sort((a, b) => a - b)
//     console.log(result.join('\n'));
//   })
// 출처: https://forgottenknowledge.tistory.com/entry/알고리즘-백준-2751번-수-정렬하기-Unfinished [뭘 배웠지?:티스토리]


// 퀵정렬을 이용한 풀이

const n = input.shift();

const result = quickSortStarter(input).join('\n');

function quickSortStarter(arr) {
  if (!arr.length) {
    return arr;
  }
  return quickSort(arr, 0, arr.length - 1);
}

function quickSort(array, L, R) {
  const pivot = array[Math.floor((L + R) / 2)];
  let left = L;
  let right = R;

  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;

    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }

  if (L < right) quickSort(array, L, right);
  if (R > left) quickSort(array, left, R);

  return array;
}

console.log(result);