const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 원래 toString().split('\n')해서 배열을 만들고 시작했는데,
// trim()을 이용해서 공백열만 제거 한 후,
let input = fs.readFileSync(filePath).toString().trim();

// 어차피 문자는 두개밖에 없으므로 이렇게 배열을 만든다.
// 이제서야 안 사실이지만 split() 메서드를 이용하면 그냥 문자열이 배열이 된다.
const [m, n] = input.split(" ").map(v => Number(v));

// object 객체를 만든다.
// 1은 소수가 아니므로 미리 빼준다.
const prime = { 1: true };

// 2부터 제곱근까지만 구해준다. 어차피 결과값이 2 이상이면 소수가 아니기 때문이다.
for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
  // 2) prime[i]이 있는지 확인하고, 있으면 for문을 다시 돌려 i++ 해준다.
  if (prime[i]) {
    continue;
  }
  // 1) i의 거듭제곱으로 구하는 이유는,
  // 어차피 그 전까지의 값은, 이미 이전의 i값으로 계산 되었기 때문이다.
  for (let j = i ** 2; j <= n; j += i) {
    prime[j] = true;
  }
}

const results = [];

// 이제 본 문제인 n값부터 m값 사이의 값을 구한다!
for (let i = m; i <= n; i++) {
  // prime[i]가 선언되지 않았다(undefined)면 소수이다.
  // undefined 앞에 !를 붙이면 true가 된다!
  if (!prime[i]) {
    results.push(i);
  }
}

// 각각의 배열에 개행(\n)을 넣어서 1) 문자열로 합쳐주고, 2) 출력한다.
console.log(results.join("\n"));
