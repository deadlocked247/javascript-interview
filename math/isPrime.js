function isPrime(n) {
  if (n < 2) return false;
  var sqrt = Math.sqrt(n);
  for (var i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(200, isPrime(200));
console.log(123, isPrime(123));
console.log(1, isPrime(1));
console.log(7, isPrime(7));
console.log(-20, isPrime(-20));
