/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let currentPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (price < prices[i - 1]) {
      result += prices[i - 1] - currentPrice;
      currentPrice = price;
    }
  }

  if (prices[prices.length - 1] >= prices[prices.length - 2])
    result += prices[prices.length - 1] - currentPrice;

  return result;
};
