let new_id = "...!@BaT#*..y.abcdefghijklm";
let result = "bat.y.abcdefghi";

console.log(solution(new_id));

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15).replace(/\.$/, ''); // 6
  return answer.padEnd(3, answer[answer.length - 1]); // 7
}