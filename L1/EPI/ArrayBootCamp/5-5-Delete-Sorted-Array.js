/*
  Delete duplicates from sorted array
  O(n) O(1)

  Initial thoughts:
  Overwrite or swap elements

  [2,3,4,5,5,5,6,6,7,7,7,9,11,11]
  if you get a new value, put it in the index, otherwise keep moving
                         V
  [2,3,4,5,6,7,9,11,7,7,7,9,11,11]
  [2,3,4,5,6,]
           ^
  [2,3,4,5,6,7,9,11]
  keep a pointer nextInsert, and curr, and insert at nextInsert if the value you got is new

  LL:
  O(1) space -> definitely overwrite or swap values. Don't worry about data integrity
*/

const removeDuplicates = function(nums) {
  let prevVal = null;
  let nextInsert = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== prevVal) {
      prevVal = nums[i];
      nums[nextInsert++] = nums[i];
    }
  }
  return nextInsert;
}

