// There is a building of 100 floors.
// If an egg drops from the Nth floor or above it will break.
// You are given 2 eggs, find N while minimizing number of drops for worst case

// Worst case balancing


function drop (floor) {
  this.countDrops++;
  return floor >= this.breakingPoint;
}

function findBreakingPoint (floors) {
  var interval = 14;
  var previousFloor = 0;
  var egg1 = interval;
  while (!drop.call(this, egg1) && egg1 <= floors) {
    interval -= 1;
    previousFloor = egg1;
    egg1 += interval;
  }

  var egg2 = previousFloor + 1;
  while (egg2 < egg1 && egg2 <= floors && !drop.call(this, egg2)) {
    egg2 += 1;
  }

  return egg2 > floors ? -1 : egg2;
}

(function test () {
  var obj = {
    countDrops: 0,
    breakingPoint: 4,
  };
  console.log(10, 'breaking point: ' + obj.breakingPoint, findBreakingPoint.call(obj, 10));
  var obj = {
    countDrops: 0,
    breakingPoint: 19,
  };
  console.log(20, 'breaking point: ' + obj.breakingPoint, findBreakingPoint.call(obj, 20));
  var obj = {
    countDrops: 0,
    breakingPoint: 1,
  };
  console.log(1, 'breaking point: ' + obj.breakingPoint, findBreakingPoint.call(obj, 1));
})();
