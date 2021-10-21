/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let globalMaxGain = 0;
  let localMinPrice = prices[0];
  let localMaxPrice = prices[0];
  let localDiff = 0;
  prices.forEach(price => {
      if (price > localMaxPrice) {
          localMaxPrice = price;
      }
      if (price < localMinPrice) {
          localMinPrice = price;
          localMaxPrice = 0;
      }
      const tempGain = localMaxPrice - localMinPrice;
      globalMaxGain = Math.max(tempGain, globalMaxGain);
  });
  return globalMaxGain;
};