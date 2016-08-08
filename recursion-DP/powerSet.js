'use strict';

/**
 * Write a function that returns all possible subsets within a set
 * e.g. {a, b} return {a}, {b}, {a, b}
 */

function findPowerSets (set) {
  if (set.length === 1) {
    return [set, []];
  } else if (set.length < 1) {
    return [];
  } else {
    const e = set.pop();
    const s = findPowerSets(set);
    // duplicate the elements of s into s1 without creating references.
    const s1 = s.concat(JSON.parse(JSON.stringify(s)));
    // add e to the second group of duplicates
    for (let i = s.length; i < s1.length; i++) {
      s1[i].push(e);
    }
    return s1;
  }
}


console.log([1, 2, 3], findPowerSets([1, 2, 3]));
console.log([], findPowerSets([]));
console.log([1], findPowerSets([1]));
