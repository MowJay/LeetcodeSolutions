/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const result = [];
  let pairsCount = 0;
  let a = 0;
  let b = 0;

  while (pairsCount < k && a < nums1.length && b < nums2.length) {
    result.push([nums1[a], nums2[b]]);
    pairsCount++;
    if (
      a + 1 < nums1.length &&
      nums1[a + 1] + nums2[b] > nums1[a] + nums2[b + 1]
    ) {
      b++;
    } else if (
      b + 1 < nums2.length &&
      nums1[a + 1] + nums2[b] < nums1[a] + nums2[b + 1]
    ) {
      a++;
    } else {
      break;
    }
  }

  return result;
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
