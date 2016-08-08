'use strict';

/**
 * Write a function to swap a number in place
 */

function swapInPlace (x, y) {
  x = x - y;
  y = x + y;
  x = y - x;
  console.log('x: ' + x, 'y: ' + y);
}

let x = 3;
let y = 5;
console.log('x: ' + x, 'y: ' + y);
swapInPlace(x, y);
