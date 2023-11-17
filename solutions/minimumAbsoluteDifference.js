var minimumAbsDifference = function (arr) {
  let minAbsolute = Infinity;
  let result = [];
  let difference;

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    difference = arr[i + 1] - arr[i];
    if (difference < minAbsolute) {
      minAbsolute = difference;
      result = [[arr[i], arr[i + 1]]];
    } else if (difference === minAbsolute) {
      result.push([arr[i], arr[i + 1]]);
    }
  }

  return result;
};
