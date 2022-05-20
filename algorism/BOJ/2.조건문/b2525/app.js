const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0], +input[1]);

function solution(clock, C) {
	clock = clock.split(' ').map(Number);
	let A = clock[0];
	let B = clock[1];

	B += C;

	if (B >= 60) {
		A += Math.floor(B / 60);
		B %= 60;

		if (A >= 24) {
			A %= 24;
		}
	}
	console.log(A, B);
}