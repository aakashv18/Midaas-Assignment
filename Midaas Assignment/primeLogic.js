// checking if number is prime or not
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  let i = 5;
  while (i * i <= n) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
    i += 6;
  }
  return true;
}
// iterate all numbers and check if it is prime or not
function generatePrimesNaive(start, end) {
  const primes = [];
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) primes.push(num);
  }
  return primes;
}
// iterate only odd numbers
function generatePrimesOptimized(start, end) {
  const primes = [];
  if (start <= 2) {
    primes.push(2);
    start = 3;
  }
  if (start % 2 == 0) start++;
  for (let num = start; num <= end; num += 2) {
    if (isPrime(num)) primes.push(num);
  }
  return primes;
}
// first calculate all primes till end
function generatePrimesSieve(start, end) {
  const primes = [];
  const sieve = Array(end + 1).fill(true);
  let p = 2;
  while (p * p <= end) {
    if (sieve[p]) {
      for (let i = p * p; i <= end; i += p) sieve[i] = false;
    }
    p++;
  }
  for (let p = Math.max(2, start); p <= end; p++) {
    if (sieve[p]) primes.push(p);
  }
  return primes;
}

module.exports = {
  generatePrimesNaive,
  generatePrimesOptimized,
  generatePrimesSieve,
};
