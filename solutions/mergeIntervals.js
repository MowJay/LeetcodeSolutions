/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let result = [];

  const mergeIntervals = (interval1, interval2) => [
    Math.min(interval1[0], interval2[0]),
    Math.max(interval1[1], interval2[1]),
  ];

  const addInterval = (interval) => {
    let added = false;
    for (let i = 0; i < result.length; i++) {
      if (
        (result[i][0] <= interval[0] && result[i][1] >= interval[0]) ||
        (result[i][0] <= interval[1] && result[i][1] >= interval[1]) ||
        (result[i][0] >= interval[0] && result[i][1] <= interval[1])
      ) {
        added = true;
        const selectedInterval = result[i];
        result = result.splice(i, 1);
        addInterval(mergeIntervals(interval, selectedInterval));
        break;
      }
    }

    if (!added) {
      result.push(interval);
    }
  };

  intervals.forEach((interval) => addInterval(interval));

  return result;
};
