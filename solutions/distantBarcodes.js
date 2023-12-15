/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  if (barcodes.length < 3) return barcodes;

  const hash = {};
  for (let i of barcodes) {
    if (typeof hash[i] === "number") hash[i]++;
    else hash[i] = 1;
  }

  const deacreasingSortedkeys = Object.keys(hash).sort(
    (a, b) => hash[b] - hash[a]
  );

  let pos = 0;
  const result = new Array(barcodes.length);
  for (let key of deacreasingSortedkeys) {
    while (hash[key] > 0) {
      if (pos > barcodes.length - 1) {
        pos = 1;
      }
      result[pos] = parseInt(key);
      pos += 2;
      hash[key]--;
    }
  }

  return result;
};
