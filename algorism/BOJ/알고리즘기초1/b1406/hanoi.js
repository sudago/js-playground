function Hanoi(num, A, B, C) {
  if (num === 0)
    return;
  Hanoi(num - 1, A, C, B);
  console.log(`${A}에서 ${C}로 이동`);
  Hanoi(num - 1, B, A, C);
}

Hanoi();