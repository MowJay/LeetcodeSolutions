/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const obj = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (char of text) obj[char]++;

  return Math.floor(Math.min(obj.b, obj.a, obj.l / 2, obj.o / 2, obj.n));
};

maxNumberOfBalloons("balon");
