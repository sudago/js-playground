const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map(Number);

solution(input[0], input[1]);

function solution(h, m) {
	m -= 45;

	if (m < 0) {
		h--;
		m += 60;

		if (h < 0) {
			h += 24;
		}
	}

	console.log(h, m);
}