/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let currentStr = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (currentStr.includes(s[i])) {
      count++;
      currentStr = s[i];
    } else {
      currentStr += s[i];
    }
  }

  return currentStr ? count + 1 : count;
};
