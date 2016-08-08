'use strict';

/**
 * Write a function that multiplies two positive integers without using the * operator
 */

function multiplyRecursive(x, y) {
  if (x === 1) return y;
  if (y === 1) return x;
  if (x > y) {
    return x + multiplyRecursive(x, y - 1);
  } else {
    return y + multiplyRecursive(x - 1, y);
  }
}
console.log('multiplyRecursive');
console.time('multiplyRecursive');
let ans = multiplyRecursive(10, 8);
console.timeEnd('multiplyRecursive');
console.log(10, 8, ans);

function multiplyRecursiveDP(x, y) {
  function multiply(x, y, memo) {
    if (x === 1) return y;
    if (y === 1) return x;
    if (x > y) {
      memo['' + x + (y - 1)] = memo['' + x + (y - 1)] || x + multiplyRecursive(x, y - 1);
      return memo['' + x + (y - 1)];
    } else {
      memo['' + (x - 1) + (y)] = memo['' + (x - 1) + (y)] || y + multiplyRecursive(x - 1, y);
      return memo['' + (x - 1) + (y)];
    }
  }
  return multiply(x, y, {});
}

console.log('multiplyRecursiveDP');
console.time('multiplyRecursiveDP');
ans = multiplyRecursiveDP(10, 8);
console.timeEnd('multiplyRecursiveDP');
console.log(10, 8, ans);
