const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map(Number).sort((a, b) => a - b);

solution(input);

function solution(num) {
	const A = num[0];
	const B = num[1];
	const C = num[2];

	let sum = 0;

	if (A === B && B === C) {
		sum += 10000 + (A * 1000);
	} else if (A === B || B === C) {
		sum += 1000 + (B * 100);
		// 밑의 else if줄은 생략하고 else만 쓰는게 더 좋음.
	} else if (A !== B && B !== C) {
		sum += (C * 100);
	}

	console.log(sum);
}