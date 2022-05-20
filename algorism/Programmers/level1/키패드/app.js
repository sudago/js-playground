const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

console.log(solution(numbers, hand));

function solution(numbers, hand) {
  var answer = '';
  let keypad = {
    1: [1, 1], 2: [1, 2], 3: [1, 3],
    4: [2, 1], 5: [2, 2], 6: [2, 3],
    7: [3, 1], 8: [3, 2], 9: [3, 3],
    '*': [4, 1], 0: [4, 2], '#': [4, 3]
  }

  let nowL = [4, 1]; // '*'
  let nowR = [4, 3]; // '#'

  numbers.forEach(num => {
    let nowNum = keypad[num];
    // nowNum[1]은 배열. value[0, 0]의 두번째 index.
    if (nowNum[1] === 1) { // 왼손이라면
      nowL = nowNum;
      answer += 'L';
    } else if (nowNum[1] === 3) { // 오른손이라면
      nowR = nowNum;
      answer += 'R';
    } else { // if(nowNum[1] === 2) keypad의 가운데라면,
      // 각 손가락의 위치 확인, 가장 가까운 손가락 이동, 둘 다 같은 거리라면 hand에 따라 결정.
      let distanceL = getDistance(nowL, nowNum);
      let distanceR = getDistance(nowR, nowNum);
      if (distanceL === distanceR) {
        if (hand === 'left') {
          nowL = nowNum;
          answer += 'L';
        } else {
          nowR = nowNum;
          answer += 'R';
        }
      } else if (distanceL < distanceR) {
        nowL = nowNum;
        answer += 'L';
      }
      else {
        nowR = nowNum;
        answer += 'R';
      }
    }
  })
  return answer;
}
// 왼손 오른손 현재 위치에서 이동 위치까지의 거리구하는 함수
function getDistance(arr1, arr2) {
  let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
  return result;
}

