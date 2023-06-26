/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let i = 0;
  let m = nums[0];
  while (i < nums.length - 1) {
    if (m < 1) return false;
    i++;
    m--;
    m = Math.max(m, nums[i]);
  }

  return true;
};
