/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const checkMinimum = (i) =>
    nums[i] < nums[i === 0 ? nums.length - 1 : i - 1] &&
    nums[i] < nums[i === nums.length - 1 ? 0 : i + 1];

  const getFirstThird = () => Math.floor(nums.length / 3);
  const getSecondThird = () =>
    Math.min(Math.ceil((nums.length / 3) * 2), nums.length - 1);

  let i = getFirstThird();
  let j = getSecondThird();
  while (nums.length > 1) {
    if (nums[i] > nums[j]) {
      if (checkMinimum(j)) return nums[j];
      nums = nums.slice(i + 1, j);
    } else {
      if (checkMinimum(i)) return nums[i];
      nums = nums.slice(0, i).concat(nums.slice(j + 1));
    }
    i = getFirstThird();
    j = getSecondThird();
  }

  return nums[0];
};
