/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const zerRows: number[] = [];
  const zeroColumns: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zerRows.push(i);
        zeroColumns.push(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (zerRows.includes(i)) {
      matrix[i] = new Array(matrix[0].length).fill(0);
      continue;
    }

    for (let j = 0; j < zeroColumns.length; j++) {
      matrix[i][zeroColumns[j]] = 0;
    }
  }
}
