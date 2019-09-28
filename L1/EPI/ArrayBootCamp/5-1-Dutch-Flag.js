/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are
adjacent, with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
*/

/*
  Idea: Swapping invalid parts
  P1. Keep track of where you should be swapping / overwriting 0s and 2s
  swap the 0s and 2s to the right place and move your zero and two pointer accordingly

  P2. When swapping, you have to make sure not to swap out a valid value, to an invalid position
  After making the swap, move to the first invalid position

  A slightly cleaner solution:
  Go through the whole array, but this time, check if you should be making the swap within a new while loop
  i > two, don't swap because we know values past the two have been manually set correctly
  i < zero, don't swap because we're reading too far ahead
    while (nums[i] === 2 && two >= i) {
      swap(nums, two--, i)
    }
    while (nums[i] === 0 && zero <= i ) {
      swap(nums, zero++, i);
    }

  LL:
  I already knew the main idea for this one but forgot about the second part and carelessly submitted
  Be vigilant even if you know the answer. I didn't lay out my assumptions clearly and didn't consider the case
  of swapping out good values.
*/
const sortColors = function(nums) {
  let zero = 0;
  while (nums[zero] === 0) {
    zero++;
  }
  let two = nums.length - 1;
  while (nums[two] === 2) {
    two--;
  }

  for (let i = zero; i <= two; i++) {
    if (nums[i] === 2) {
      swap(nums, i, two--);
      while (nums[two] === 2) two--;
    }
    if (nums[i] === 0) {
      swap(nums, i, zero++);
      while (nums[zero] === 0) {
        zero++;
        i++;
      }
    }
  }
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j]
  nums[j] = temp;
}
