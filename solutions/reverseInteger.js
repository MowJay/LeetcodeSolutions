/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let r = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  if (r > 2 ** 31 || r < 2 ** 31 * -1) return 0;
  return x < 0 ? r * -1 : r;
};
