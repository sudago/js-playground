const { fail } = require("assert");

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];


console.log(solution(N, stages));


function solution(N, stages) {
  let answer = [];
  //실패한 사람은 제외해야되기 떄문에 임시 변수 people생성
  let people = stages.length
  for (let i = 1; i <= N + 1; i++) {
    //Array.filter() : 조건을 만족하는 원소만 추출
    let tmp = stages.filter(n => n === i).length
    //answer = [[스테이지, 실패율]]
    answer.push([i, tmp / people])
    //실패한 사람 제외
    people -= tmp
  }
  //마지막은 모두 깬사람들이므로 실패율이 없어서 pop()
  answer.pop()
  //answer의 2번째 원소기준으로 내림차순으로 정렬
  answer = answer.sort((a, b) => b[1] - a[1])
  //Array.map() : 배열을 조건에 맞게 변환
  return answer.map(a => a[0]);
}
// 망한 코드.. 흙흙
// function solution(N, stages) {
//   let stagesObj = {};

//   stages.forEach(n => {
//     for (let i = 1; i <= n; i++) {
//       if (!stagesObj[i]) {
//         stagesObj[i] = 1;
//       } else {
//         stagesObj[i] += 1;
//       }
//     }
//   });

//   let failArr = [];
//   const userNum = stages.length;
//   for (let key in stagesObj) {
//     let notClear = userNum - stagesObj[key];
//     let nowUserNum = stagesObj[key];
//     failArr.push(notClear / nowUserNum);
//   }
//   // failArr에 실패율은 넣었음.
//   // 큰 수부터 (인덱스 값 + 1) 호출하고 싶음.
//   return failArr;
// }


// // 이중 for문
// let arr = new Array(N + 1).fill(0);
// console.log(arr);
// for (let i = 0; i < stages.length; i++) {
//   for (let j = 0; j < stages[i]; j++) {
//     arr[j] += 1;
//   }
// }
// console.log(arr);

// // [ 0, 0, 0, 0, 0, 0 ]
// // [ 8, 7, 4, 2, 1, 1 ]