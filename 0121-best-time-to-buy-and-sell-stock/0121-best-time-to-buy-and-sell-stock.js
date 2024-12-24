/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  prices.forEach((price, index) => {
      for (let i = index + 1; i < prices.length; i++) {
          if (price < prices[i]) {
              const difference = prices[i] - price;
              if (profit < difference) {
                  profit = difference;
              }
          }
      }
  });

  return profit;
};
