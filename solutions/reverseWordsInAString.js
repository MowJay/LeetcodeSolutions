/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((i) => i !== "")
    .reverse()
    .join(" ")
    .trim();
};
