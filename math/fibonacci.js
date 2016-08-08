'use strict';
// O(2^n)
function recursiveFib (n) {
  if (n === 0 || n === 1) return n;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}
console.log('recursiveFib - 20');
console.time('recursiveFib');
let ans = recursiveFib(20);
console.timeEnd('recursiveFib');
console.log(ans);

// O(n)
// Top-down DP approach
function recursiveDpFib (n) {
  function fibonacci (n, memo) {
    if (n === 0 || n === 1) return n;
    if (!memo[n]) {
      memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    }
    return memo[n];
  }

  return fibonacci(n, new Array(n + 1));
}

console.log('recursiveDpFib - 20');
console.time('recursiveDpFib');
ans = recursiveDpFib(20);
console.timeEnd('recursiveDpFib');
console.log(ans);

// Bottom-up DP approach
// O(n)
function recursiveDpFib2 (n) {
  if (n === 0) return 0;
  let a = 0;
  let b = 1;
  let temp;
  for (let i = 2; i < n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return a + b;
}

console.log('recursiveDpFib2 - 20');
console.time('recursiveDpFib2');
ans = recursiveDpFib2(20);
console.timeEnd('recursiveDpFib2');
console.log(ans);
