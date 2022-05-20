let n = 0;
let arr = Array(23).fill(0);

// n은 배열의 수 만큼 반복.
for (let i = 1; i <= 22; i++) {
  n = i;
  d(n);
}
// 12, 15, 21



function d(n) {
  while (n <= 22) {
    // n 값을 sum에 넣는다.
    let sum = n;

    // 문자열 n의 index number를 구하고 sum에 합친 값을 넣는다.
    for (let j = 0; j < String(n).length; j++) {
      sum += Number(String(n)[j]);
    }
    n = sum;
    // if (arr[n] === NaN) {
    //   break;
    // }
    // break를 어디다가 놔야할지 모르겠어........

    arr[n]++;
  }
}


console.log('arr: ', arr);
// 셀프넘버를 출력한다. (arr의 index number)
for (let i = 1; i <= 23; i++) {
  if (arr[i] === 0) {
    console.log('self number: ', i);
  }
}

// 10000개의 배열을 만든다.
// 함수 d(n)을 계산하는 값을 만든다.
// 1부터 d(n)에 넣어서 계산한다.
// 계산한 값을 cnt +1 해서 Array에 넣는다.
// cnt 한 Array들 중에 값이 0인 배열만 출력한다.
