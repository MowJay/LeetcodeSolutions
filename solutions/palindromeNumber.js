/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString();

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) return false;
    i++;
    j--;
  }

  return true;
};
