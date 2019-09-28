/*
  Given an input array of unique elements and a size, return a random subset of that array of that size where every subset of that array
  should be equally likely

  Note: Subsets don't necessarily preserve order while subsequences do.
  Can't we just randomly take elements from the array one by one and add it to a new set while removing?
  O(n) to remove
  O(1) to find index

  Runtime O(n)

  Details: currently we use O(n) space, to hold all the new values, but we should to it within the same array
  To do this, we just swap the new index we picked with the first index, and then move the RNG up an index

  LL:
  Math.random goes from [a, b) which makes it good for indexing arrays
  Think about optimizing for space as well. When doing things in place, swapping is your best bet.
*/

function randSubset(nums, k) {
  for (let i = 0; i < k; i++) {
    let index = Math.floor(Math.random() * (nums.length - i)) + i;
    swap(nums, i, index);
  }
  nums.splice(k);
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
randSubset(nums, 4);
