/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let profit = 0;

    prices.forEach((price) => {
        if (price < minPrice) {
            minPrice = price;
        } else {
            profit = Math.max(profit, price - minPrice);
        }
    });

    return profit;
};