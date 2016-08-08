'use strict';

function findPairs (array, sum) {
  const found = [];
  const maxCount = Math.max(array);
  const pairs = {};
  let temp;
  for (let i of array) {
    temp = sum - array[i];
    if (temp >= 0 && found[temp] !== -1) {
      pairs[array[i]] = temp;
    }
    found[array[i]] = true;
  }
  return pairs;
}

var arr = [2, 4, 5, 1, 2, 4, 7, 8];

console.log(arr, 3, findPairs(arr, 3));
