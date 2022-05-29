const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = +input[0];

solution(input);

function solution(num) {
	// 지문만 잘 읽으면 공식을 잘 짤 수 있다.
	if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
		console.log(1);
		/* return을 쓰면 if 조건을 충족 했을 시,
		else 없이 코드를 종료 할 수 있음.*/
		return;
	}

	console.log(0);
}
