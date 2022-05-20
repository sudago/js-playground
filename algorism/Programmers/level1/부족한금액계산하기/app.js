const price = 3;
const money = 20;
const count = 4
const result = 10;


console.log(solution(price, money, count));

function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  } if (totalPrice > money) {
    return Math.abs(money - totalPrice);
  } else {
    return 0;
  }
}