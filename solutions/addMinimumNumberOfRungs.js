/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function (rungs, dist) {
  let currentHeight = 0;
  let index = 0;
  let result = 0;

  while (index < rungs.length) {
    if (rungs[index] - currentHeight <= dist) {
      currentHeight = rungs[index];
      index++;
    } else {
      let temp = (rungs[index] - currentHeight) / dist;
      temp = temp % 1 === 0 ? temp - 1 : Math.floor(temp);
      temp = Math.max(temp, 1);
      result += temp;
      currentHeight += temp * dist;
    }
  }

  return result;
};
