const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
const result = ["#####", "# # #", "### #", "# ##", "#####"];


console.log(solution(n, arr1, arr2));

function solution(n, arr1, arr2) {
  let array1 = arr1.map(num => num.toString(2));
  array1 = array1.map(num => {
    while (num.length !== n) {
      num = '0' + num;
    }
    return num;
  });

  let array2 = arr2.map(num => num.toString(2));
  array2 = array2.map(num => {
    while (num.length !== n) {
      num = '0' + num;
    }
    return num;
  });

  let sum = [];
  let answer = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array1[i][j] === '1' && array2[i][j] === '1') {
        answer += '#';
      } else if (array1[i][j] === '0' && array2[i][j] === '0') {
        answer += ' ';
      } else if (array1[i][j] === '1' && array2[i][j] === '0') {
        answer += '#';
      } else if (array1[i][j] === '0' && array2[i][j] === '1') {
        answer += '#';
      }
    }
    sum.push(answer);
    answer = '';
  }

  return sum;
}
