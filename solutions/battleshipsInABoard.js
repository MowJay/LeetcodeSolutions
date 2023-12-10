/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let count = 0;

  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board[0].length; j++)
      if (
        board[i][j] === "X" &&
        board[i - 1]?.[j] !== "X" &&
        board[i][j - 1] !== "X"
      )
        count++;

  return count;
};
