let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let target = parseInt(input);
const sticks = [64];

do {
  sum = sticks.reduce((acc, cur) => (acc += cur));

  if (sum > target) {
    smallStick = sticks.pop();
    dividedStick = smallStick / 2;
    sticks.push(dividedStick);

    if (sum - dividedStick < target) {
      sticks.push(dividedStick);
    }
  }
} while (sum !== target);

console.log(sticks.length);
