/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let sub = [];

  let a = 0;
  let b = 0;

  while (b < s.length) {
    if (sub.includes(s.charAt(b))) {
      result = Math.max(result, sub.length);
      sub = [];
      a++;
      b = a;
    } else {
      sub.push(s.charAt(b));
      b++;
    }
  }

  return Math.max(result, sub.length);
};
