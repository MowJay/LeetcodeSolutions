/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";
  let n = s.length;

  for (let c = 0; c < 2 * n - 1; c++) {
    let i = Math.floor(c / 2);
    let j = Math.ceil(c / 2);

    while (i >= 0 && j < n) {
      if (s.charAt(i) === s.charAt(j)) {
        if (j - i + 1 > result.length) {
          result = s.slice(i, j + 1);
        }
        i--;
        j++;
      } else {
        break;
      }
    }
  }

  return result;
};
