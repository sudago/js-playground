const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

input.shift();
// VSCode에서 개행 문자('\r') 제거 하기 위한 코드.
const inputCmd = input.map(el => el.replace('\r', ''));

const stack = [];


const cmd = {
  push: (el) => {
    stack.push(el.split(' ')[1]);
    return ''
  },
  // stack이 빈 배열일 때, 
  // stack.pop()이 undefined가 되는데, 그럴 시에 -1를 출력한다.
  pop: () => stack.pop() || -1,
  size: () => stack.length,
  // stack이 빈 배열 일 때 undefined를 출력하는데, undefined는 true가 반환 된다.
  // 그래서 0번째 배열을 기준으로 판단한다.
  empty: () => stack[0] ? 0 : 1,
  top: () => stack[stack.length - 1] || -1,
}

const result = inputCmd.reduce((acc, v) =>
  acc + (cmd[v] ? cmd[v]() + '\n' : cmd.push(v)), '');
console.log(result);

// 위 3줄과 같은 코드. map과 문자열을 저장 할 resultStr을 따로 적어보았다.
// let resultStr = '';
// inputCmd.map(v =>
//   cmd[v] ? resultStr += cmd[v]() + '\n' : resultStr += cmd.push(v));
// console.log(resultStr);






// const array = fs.readFileSync(filePath).toString().split('\n');
// array.shift();

// const stack = [];

// const fun = {
//   pop: () => stack.pop() || -1,
//   size: () => stack.length,
//   empty: () => stack[0] ? 0 : 1,
//   top: () => stack[stack.length - 1] || -1,
//   push: (item) => {
//     stack.push(item.split(" ")[1]);
//     return '';
//   }
// }
// // VSCode에서 개행 문자 ('\r')를 제거하기 위한 코드
// const arr = array.map(el => el.replace('\r', ''));

// const result = arr.reduce((acc, v) =>
//   acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)), '');

// console.log(result);




