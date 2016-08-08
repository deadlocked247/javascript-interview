'use strict';

/**
 * Write an algorithim that computes the number of trailing zeros in n factorial
 */

function findTrailingZeros (n) {
  if (n < 0) {
    return false;
  }
  let count = 0;
  for (let i = 5; n/i > 0; i = 5 * i) {
    count += n / i;
  }
  return Math.floor(count);
}

console.log(5, 5 * 4 * 3 * 2 * 1, findTrailingZeros(5));
