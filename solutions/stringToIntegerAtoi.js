/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const maxNumber = 2147483647;
  const minNumber = -2147483648;

  let isNegative = false;
  let result = 0;
  let index = 0;

  s = s.trim();

  if (s.charAt(index) === "-") {
    isNegative = true;
    index++;
  } else if (s.charAt(index) === "+") {
    index++;
  }

  while (index < s.length) {
    if (!numbers.includes(s.charAt(index))) {
      break;
    }

    result = result * 10 + parseInt(s.charAt(index));
    index++;
  }

  if (isNegative && result * -1 < minNumber) return minNumber;
  else if (!isNegative && result > maxNumber) return maxNumber;

  return isNegative ? result * -1 : result;
};
