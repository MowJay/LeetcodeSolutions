/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let first = 0;
  let last = height.length - 1;
  let result = 0;

  while (first < last) {
    result = Math.max(
      Math.abs(Math.min(height[last], height[first]) * (last - first)),
      result
    );
    if (height[first] > height[last]) last--;
    else first++;
  }

  return result;
};
