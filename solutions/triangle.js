/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length === 1) {
    return triangle[0][0];
  }
  let i = 1;

  while (i < triangle.length) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(
        j - 1 >= 0 ? triangle[i - 1][j - 1] : Number.MAX_VALUE,
        j < triangle[i - 1].length ? triangle[i - 1][j] : Number.MAX_VALUE
      );
    }
    i++;
  }

  let result = Number.MAX_VALUE;
  for (let k = 0; k < triangle[i - 1].length; k++) {
    if (triangle[i - 1][k] < result) result = triangle[i - 1][k];
  }

  return result;
};
