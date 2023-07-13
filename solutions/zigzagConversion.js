/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const array = [];

  let c = 0;
  let x = 0;
  let y = 0;

  let goingDown = true;
  while (c < s.length) {
    if (goingDown) {
      if (y < numRows) {
        if (!array[x]) array[x] = [];
        array[x][y] = s.charAt(c);
        y++;
        c++;
      } else {
        goingDown = false;
        y = y > 1 ? y - 2 : y - 1;
        x++;
      }
    } else {
      if (y >= 0) {
        if (!array[x]) array[x] = [];
        array[x][y] = s.charAt(c);
        c++;
        y--;
        x++;
      } else {
        goingDown = true;
        y = y + 2;
        x--;
      }
    }
  }

  let result = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j][i] !== undefined) result += array[j][i];
    }
  }
  return result;
};
