/**
 * Generates list of primes
 * @param  {[Number]} max number
 * @return {[Array]}     Array of booleans if it is prime or not
 */
function sieveOfEratosthenes (max) {
  var flags = new Array(max + 1);
  for (var i = 0; i < flags.length; i++) {
    flags[i] = true;
  }
  flags[0] = false;
  flags[1] = false;
  var count = 0;
  var prime = 2;
  while (prime <= Math.sqrt(max)) {
    // Cross off remaining multiples of prime
    crossOff(flags, prime);

    // Get next true prime value
    prime = getNextPrime(flags, prime);
  }
  return flags;
}

function crossOff (flags, prime) {
  for (var i = prime * prime; i < flags.length; i += prime) {
    flags[i] = false;
  }
}

function getNextPrime (flags, prime) {
  var next = prime + 1;
  while (next < flags.length && !flags[next]) {
    next++;
  }
  return next;
}

console.log(10, sieveOfEratosthenes(10));
console.log(1, sieveOfEratosthenes(1));
console.log(7, sieveOfEratosthenes(7));
