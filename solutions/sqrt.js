/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let i = 0;
  while (i <= x) {
    if (i * i >= x) return i * i > x ? i - 1 : i;
    i++;
  }
};
