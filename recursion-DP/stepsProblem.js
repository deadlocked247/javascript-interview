'use strict';

/**
 * A child is running up a staircase and can hope either 1, 2, or 3 steps
 * at a time. Implement a method to count how many possible ways the child can
 * run up the stairs
 */

// O(n^3)
function countWaysStairsRecursive (steps) {
  if (steps < 0) {
    return 0;
  } else if (steps === 0) {
    return 1;
  } else {
    return countWaysStairsRecursive (steps - 1) +
    countWaysStairsRecursive (steps - 2) +
    countWaysStairsRecursive (steps - 3);
  }
}

console.log('countWaysStairsRecursive - 20');
console.time('countWaysStairsRecursive');
let ans = countWaysStairsRecursive(20);
console.timeEnd('countWaysStairsRecursive');
console.log(ans);

// O(n)
function countWaysStairsDP (steps) {
  function countWays (n, memo) {
    if (n < 0) {
      return 0;
    } else if (n === 0) {
      return 1;
    } else if (!isNaN(memo[n])) {
      return memo[n];
    } else {
      memo[n] = (countWays(n - 3, memo) + countWays(n - 2, memo) + countWays(n - 1, memo));
      return memo[n];
    }
  }
  return countWays(steps, new Array(steps + 1));
}

console.log('countWaysStairsDP - 20');
console.time('countWaysStairsDP');
ans = countWaysStairsDP(20);
console.timeEnd('countWaysStairsDP');
console.log(ans);
