/*
  Given an array representing a number, increment the number by 1
  idea: keep a carry, move the carry forward, check the carry at the end

  15 -> 16
  0 -> 1
  9 -> 10
  999 -> 1000

  O(n) operation
  LL:
  Small hiccup in the setting logic, make sure to think about exactly what the code is doing
*/

function increment(arr) {
  let carry = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i] + carry;
    carry = arr[i] === 10 ? 1 : 0;
    arr[i] %= 10;
  }
  if (carry) {
    arr.unshift(1);
  }
  console.log(arr);
  return arr;
}


increment([0]);
increment([9, 9, 9]);
increment([9]);
increment([1, 5]);

