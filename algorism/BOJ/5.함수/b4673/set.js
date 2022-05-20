const N = 10000;
const chkArr = Array(N + 1).fill(true);

function func(n) {
  let s = n;

  while (n) {
    s += n % 10;
    n = Math.floor(n / 10);
  }

  return s + n;
}

for (let i = 1; i <= N; i++) {
  const t = func(i);
  if (t < N) {
    chkArr[t] = false;
  }
}

for (let i = 1; i < N; i++) {
  if (chkArr[i]) console.log(i);
}