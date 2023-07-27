/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const checkMinimum = (i) =>
    ((i > 0 && nums[i] < nums[i - 1]) ||
      (i == 0 && nums[i] < nums[nums.length - 1])) &&
    ((i < nums.length - 1 && nums[i] < nums[i + 1]) ||
      (i === nums.length - 1 && nums[i] < nums[0]));

  const getFirstThird = () => Math.max(Math.floor(nums.length / 3), 0);
  const getSecondThird = () =>
    Math.min(Math.ceil((nums.length / 3) * 2), nums.length - 1);

  let i = getFirstThird();
  let j = getSecondThird();
  while (nums.length > 1) {
    if (checkMinimum(i)) return nums[i];
    if (checkMinimum(j)) return nums[j];

    if (nums[i] > nums[j]) {
      nums = nums.slice(i + 1, j);
    } else {
      nums = nums.slice(0, i).concat(nums.slice(j + 1));
    }
    i = getFirstThird();
    j = getSecondThird();
  }

  return nums[0];
};
