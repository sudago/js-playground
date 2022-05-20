const participant = ["mislav", "stanko", "mislav", "ana", "zian"];
const completion = ["stanko", "ana", "mislav"];
const result = "mislav";


console.log(solution(participant, completion));

// function solution(participant, completion) {
//   // 완주하지 못한 선수가 2명 이상일 때도 사용할 수 있게 짜고 싶었음.
//   completion.forEach(user => {
//     participant.splice(participant.indexOf(user), 1);
//   })

//   // other도 문자열로 꺼내고 싶었는데 어떻게 하는지 모름..
//   let [answer, ...other] = participant;
//   return answer;
// }

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// function solution(participant, completion) {
//   const map = new Map();

//   for (let i = 0; i < participant.length; i++) {
//     let a = participant[i];
//     let b = completion[i];

//     map.set(a, (map.get(a) || 0) + 1);
//     map.set(b, (map.get(b) || 0) - 1);

//     for (let [k, v] of map) {
//       if (v > 0) {
//         return k;
//       }
//     }
//   }
// }
