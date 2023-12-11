/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  if (nums.length < 3) return -1;

  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > min && nums[i] < max) {
      return nums[i];
    } else if (nums[i] < min) {
      if (min < max) return min;
      min = nums[i];
    } else if (nums[i] > max) {
      if (min < max) return max;
      max = nums[i];
    }
  }

  return -1;
};
