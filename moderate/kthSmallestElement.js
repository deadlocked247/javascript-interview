'use strict';

const MinHeap = require('../data-structures/minHeap.js');

function kthSmallest(arr, k) {
  const heap = new MinHeap(arr);
  for (let i = 0; i < k - 1; i++)
    heap.removeHead();
  return heap.removeHead();
}

console.log([2, 3, 4, 1, 7, 8], 3, kthSmallest([2, 3, 4, 1, 7, 8], 3));
