/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let result = 0;
  let j = n - 1;

  for (let i = 0; i < m; i++) {
    while (j >= 0) {
      if (grid[i][j] < 0) {
        j--;
      } else {
        break;
      }
    }
    result += n - (j + 1);
  }

  return result;
};
