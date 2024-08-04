/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];

  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);

  let i, j, k;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;

    j = i + 1;
    k = nums.length - 1;

    while (j < k && nums[k] >= 0) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j > i + 1 && nums[j] === nums[j - 1]) j++;
        while (nums[k] === nums[k + 1]) k--;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;
};
