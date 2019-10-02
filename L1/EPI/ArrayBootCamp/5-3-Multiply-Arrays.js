// Using leetcode judge for this one and translating string to array, and back to string

/*
  Simulating, same thing with add two numbers but your carry logic is more involved
  Also have to check for negative numbers

  Just mult the two numbers. worry about sign later

  LL:
  Wow this was a long problem, my answer is not optimized, reversing too much and unshifting is expensive
  Did a good job laying out the problem and organization
  Might be good to think about the optimal solution first working with reversed arrays.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
  const isN1Negative = num1.startsWith('-');
  const isN2Negative = num2.startsWith('-');

  if (num1.startsWith('-')) num1 = num1.slice(1);
  if (num2.startsWith('-')) num2 = num2.slice(1);

  let shorterNum;
  let longerNum;
  if (num1.length > num2.length) {
    shorterNum = num2;
    longerNum = num1;
  } else {
    shorterNum = num1;
    longerNum = num2;
  }

  let products = [];
  for (let i = shorterNum.length - 1; i >= 0; i--) {
    let carry = 0;
    let arr = [];
    for (let k = 0; k < shorterNum.length - (i + 1); k++) {
      arr.push(0);
    }
    for (let j = longerNum.length - 1; j >= 0; j--) {
      let product = (shorterNum[i] * longerNum[j]) + carry;
      arr.unshift(product % 10);
      carry = Math.floor(product / 10);
    }
    if (carry) {
      arr.unshift(carry)
    }
    products.push([...arr]);
  }

  for (let i = 1; i < products.length; i++) {
    products[0] = add(products[0], products[i]);
  }

  const retString = products[0].join('');

  let isZero = true;
  for (let i = 0; i < retString.length; i++) {
    if (retString[i] !== '0') isZero = false;
  }

  if (isZero) return '0';

  if (isN1Negative && isN2Negative) return retString;
  if (isN1Negative || isN2Negative) return '-' + retString;
  return retString;
};


function add(arr1, arr2) {
  arr1.reverse();
  arr2.reverse();

  let maxLen = Math.max(arr1.length, arr2.length);

  let i = 0;
  let carry = 0;
  let ret = [];
  while (i < maxLen) {
    let sum;
    if (arr1[i] && arr2[i]) {
      sum = arr1[i] + arr2[i] + carry;
    } else if (arr1[i]) {
      sum = arr1[i] + carry;
    } else {
      sum = arr2[i] + carry;
    }
    ret.push(sum % 10);
    carry = sum >= 10 ? 1 : 0;
    i++;
  }
  if (carry) ret.push(carry);
  return ret.reverse();
}


/*
  //    1 1
  //   [1,2,3]
  //   [4,5,6]
  //    7 3 8
  //  6 1 5 0
    4 9 2 0 0
    5 6 0 8 8
*/

// multiply('456', '123');
// console.log(multiply('123', '456'));
// console.log(multiply('123', '456'));
// console.log(multiply('-123', '456'));
// console.log(multiply('123', '-456'));
// console.log(multiply('-123', '-456'));

// console.log(multiply('0', '-123'));
// console.log(multiply('0', '123'));
// console.log(multiply('0', '0'));
// console.log(multiply('1011', '123'));

