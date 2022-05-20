const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

solution(numbers, hand);

function solution(numbers, hand) {
  const right = [];
  const left = [];
  let result = '';
  for (let i = 0; i < numbers.length; i++) {
    const keyPad = numbers[i];
    if (keyPad === 1 || keyPad === 4 || keyPad === 7) {
      left.push(keyPad);
      result += "L";
    } else if (keyPad === 3 || keyPad === 6 || keyPad === 9) {
      right.push(keyPad);
      result += "R";
    } else if (keyPad === 2 || keyPad === 5 || keyPad === 8 || keyPad === 0) {
      let keyR = distance(keyPad, right, hand);
      let keyL = distance(keyPad, left, hand);

      if (keyR < keyL) {
        right.push(keyPad);
        result += "R";
      } else if (keyR > keyL) {
        left.push(keyPad);
        result += "L";
      } else if (keyR === keyL) {
        if (hand === "right") {
          right.push(keyPad);
          result += "R";
        } else if (hand === "left") {
          left.push(keyPad);
          result += "L";
        }
      }
      console.log(`keyR: ${keyR}, keyL: ${keyL}`);
    }
  }
  console.log('numbers: ' + numbers);
  console.log('left: ' + left);
  console.log('right: ' + right);
  console.log('answer: ' + result);
  console.log("LRLLLRLLRRL");
}

function distance(keyPad, handArr, hand) {
  const nowHandArr = keyPad - handArr[handArr.length - 1];
  const keypad = {
    2: [1, 3], 5: [1, 2], 8: [1, 1], 0: [1, 0],
  }

  return distance;
}
