/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;

  let sum;

  while (i < j) {
    sum = sortedNums[i] + sortedNums[j];
    if (sum === target) {
      return [nums.indexOf(sortedNums[i]), nums.lastIndexOf(sortedNums[j])];
    } else if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    }
  }
};
