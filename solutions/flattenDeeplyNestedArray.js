/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n < 1) return arr;
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ans.push(...flat(arr[i], n - 1));
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
};
