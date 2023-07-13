/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length;
  const isEven = total % 2 === 0;

  while (nums1.length + nums2.length > Math.floor(total / 2) + 1) {
    if (nums1.length > 0 && nums2.length > 0) {
      if (nums1[0] > nums2[0]) {
        nums2.shift();
      } else {
        nums1.shift();
      }
    } else if (nums1.length > 0) {
      nums1.shift();
    } else if (nums2.length > 0) {
      nums2.shift();
    }
  }

  if (nums1.length > 0 && nums2.length > 0) {
    if (isEven) {
      let a, b;
      if (nums1[0] > nums2[0]) {
        a = nums2[0];
        b = nums2[1] === undefined ? nums1[0] : Math.min(nums1[0], nums2[1]);
      } else {
        a = nums1[0];
        b = nums1[1] === undefined ? nums2[0] : Math.min(nums2[0], nums1[1]);
      }
      return (a + b) / 2;
    } else {
      return Math.min(nums1[0], nums2[0]);
    }
  } else if (nums1.length > 0) {
    return isEven ? (nums1[0] + nums1[1]) / 2 : nums1[0];
  } else if (nums2.length > 0) {
    return isEven ? (nums2[0] + nums2[1]) / 2 : nums2[0];
  }
};
