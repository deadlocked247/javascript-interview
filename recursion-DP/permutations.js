'use strict';

/**
 * Write a method to compute all permutations of a string of unique characters
 */

function getPermutations (characters) {
  var result = [];
  function permutations (prefix, remainder) {
    if (remainder.length === 0 ) result.push(prefix);
    for (let i = 0; i < remainder.length; i++) {
      const before = remainder.substring(0, i);
      const after = remainder.substring(i + 1, remainder.length);
      const char = remainder.charAt(i);
      permutations(prefix + char, before + after);
    }
  }
  permutations('', characters);
  return result;
}


console.log('asd', getPermutations('asd'));
console.log('', getPermutations(''));
console.log('a', getPermutations('a'));
