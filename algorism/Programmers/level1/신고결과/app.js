const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k = 2;
const result = [2, 1, 1, 0];


console.log(solution(id_list, report, k));

function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  let report_list = {};

  id_list.map(user_id => {
    report_list[user_id] = [];
  });

  report.map(user => {
    const [user_id, report_id] = user.split(' ');
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map(user => {
        answer[id_list.indexOf(user)] += 1;
      });

    }
  }
  return answer;
}


// 아 몬솔인지 1도 모르겠다.

// function solution(id_list, report, k) {
//   let reports = [...new Set(report)].map(a => { return a.split(' ') });
//   let counts = new Map();
//   for (const bad of reports) {
//     counts.set(bad[1], counts.get(bad[1]) + 1 || 1)
  // }
  // let good = new Map();
  // for(const report of reports){
  //     if(counts.get(report[1])>=k){
  //         good.set(report[0],good.get(report[0])+1||1)
  //     }
  // }
  // let answer = id_list.map(a=>good.get(a)||0)
  // return answer;
// }