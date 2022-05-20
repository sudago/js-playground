const nums = [3, 3, 3, 2, 2, 2];


console.log(solution(nums));

function solution(nums) {
  nums.sort((a, b) => a - b);
  let arr = [];
  nums.forEach(num => {
    if (!arr.includes(num)) {
      arr.push(num);
    }
  });
  let answer = 0;
  const pickNum = nums.length / 2;

  if (arr.length <= pickNum) {
    answer = arr.length;
  } else {
    answer = pickNum;
  }
  return answer;
}