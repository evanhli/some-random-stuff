/*
  Idea, something to do with subarrays and recursion
  [1,2,3,4,5]
  Build top down, replace the lower portion first
  [1, ]
     [2,3,4,5]

  [1,2,3,4,5]

  [1,2,3,]
  arr = [4,5]

  Each layer you go through the rest of the subarray

  LL:
  Array splice returns the DELETED elements, not the resulting array
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  let ret = [];
  helper(nums, [], ret);
  return ret;
};


function helper(arr, curr, ret) {
  if (!arr.length) {
    ret.push([...curr]);
  }

  for (let i = 0; i < arr.length; i++) {
    let temp = [...arr];
    temp.splice(i, 1);
    helper(temp, [...curr, arr[i]], ret);
  }
}

// permute([1,2,3,4,5]);
