// You have a 5 quart jub, a 3 quart jug, and an unlimited supply of water.
// How do you come up with exactly 4 quarts of water?
// You can only completely fill the quarts.

/**
 * If the water jugs are relatively prime, you can measure any value between 1 and the sum of the jugs sizes
 * So here you have to do the following
 * Fill the 5 quart jug
 * Fill the 3 quart with the 5 quarts water
 * Dump 3 quart water (now we have 2 quarts in the 5 quart)
 * Fill the 3 quart with water from the 5 quart (so the 2 quarts are in the 3 quart)
 * Fill the 5 quart
 * Fill the rest of the 3 quart container with the 5 quarts of water
 * Now we have 4 quarts left in the 5 quart container
 */
