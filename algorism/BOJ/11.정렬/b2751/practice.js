const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

// For local test
const N = input.shift();

const result = quickSortStarter(input).join('\n');

function quickSortStarter(arr) {
  if (!arr.length) {
    return arr;
  }
  return quickSort(arr, 0, arr.length - 1);
}

function quickSort(array, s, e) {
  const pivot = array[Math.floor((s + e) / 2)];
  let start = s;
  let end = e;

  while (start <= end) {
    while (array[start] < pivot) start++;
    while (array[end] > pivot) end--;

    if (start <= end) {
      const temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
    }
  }

  if (s < end) quickSort(array, s, end);
  if (e > start) quickSort(array, start, e);

  return array;
}

console.log(result);