/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const N = grid.length;

  if (grid[0][0] !== 0) return -1;
  if (grid[0][0] === 0 && N === 1) return 1;

  let steps = 1;
  let addedTuples = [[0, 0, true]];
  let added = true;
  let prevTuples = [];

  while (added) {
    added = false;
    prevTuples = Array.from(addedTuples);
    for (tuple of prevTuples) {
      if (tuple[2]) {
        tuple[2] = false;
        for (let x = tuple[0] - 1; x <= tuple[0] + 1; x++) {
          for (let y = tuple[1] - 1; y <= tuple[1] + 1; y++) {
            if (x === tuple[0] && y === tuple[1]) continue;

            if (grid?.[x]?.[y] === 0) {
              if (x === y && x === N - 1) return steps + 1;

              grid[x][y] = 1;
              addedTuples.push([x, y, true]);
              added = true;
            }
          }
        }
      }
    }
    steps++;
  }

  return -1;
};
