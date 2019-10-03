/*
  Approach, do a sieve

  3 parts
  p1 Initialize array of booleans
  p2 Start at first prime number (2) and enumerate up to n
  p3 When you find a prime number, set all of its multiples to be not prime

  Initially all numbers are prime, but we build the list of non-prime numbers constructively

  LL:
  No trial division in a sieve!
  Every number starts as prime, so when you find a prime number from the start, you must remove all of
  its multiples within the range for you array to still be accurate
*/

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  let arr = new Array(n + 1);
  arr.fill(true);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      arr[i] = true;
      count++;
      let temp = i + i;
      while (temp <= n) {
        arr[temp] = false;
        temp += i;
      }
    }
  }
  return count;
};
