/*
  Convert a base 10 number to any base number [2 - 16]

  3 parts
  p1: consider negative numbers and 0
  p2: get your array size, what number are we upper bounded by?
  p3. subtract the number of times the input number fits into each bound index
      a. bound index needs to be exponentiated to the correct upperbound
      b. take care in considering index 0
*/

const hexValues = {
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f'
}

const convertBase = function(num, base) {
  if (num === 0) return 0;
  let isNeg = (num < 0);
  num = Math.abs(num);

  let maxBase = 1;
  let count = 0;
  while (num >= maxBase) {
    count++
    maxBase *= base;
  }

  let ret = []

  for (let i = count - 1; i >= 0; i--) {
    const denominator = i === 0 ? 1 : (base ** i);
    const times = Math.floor(num / denominator);
    times >= 10 ? ret.push(hexValues[times]) : ret.push(times);
    num %= denominator;
  }

  return isNeg ? '-' + ret.join('') : ret.join('')
}


// convertBase(23, 3);
// convertBase(21233, 3);
// convertBase(1, 3);
// convertBase(9, 3);
// convertBase(10, 3);
// convertBase(16, 16);
// convertBase(15, 16);
console.log(convertBase(-15, 16));
