/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    m = Math.floor((r - l) / 2) + l;

    if (nums[m] > nums[m - 1] && nums[m] > nums[m + 1]) return m;

    if (nums[m] > nums[m + 1]) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
};
