/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 * First I tried with a recursive cache problem, the main issue there is that wasn't a correct approach for DP because not all coin changes were equal for each number. 
 * The solution came from using an memoization with indexes for each value of the coinChange and build it using that approach.
 */
 var coinChange = function(coins, amount) {
  const memo = {0: 0};
  const sortedCoins = coins.sort((a,b) => b - a);
  sortedCoins.forEach(coin => {
      memo[coin] = 1;
  });
  for (let i = 1; i <= amount; i++) {
      if (memo[i]) {
          continue;
      }
      coins.forEach(coin => {
          if (!memo[i-coin]) {
              memo[i] = -1;
          } else if (memo[i-coin] > 0) {
              if (memo[i] && memo[i] > 0) {
                  memo[i] = Math.min(memo[i], 1 + memo[i-coin]);
              } else {
                  memo[i] = 1 + memo[i-coin];
              }
          }
      });
      if (!memo[i]) {
          memo[i] = -1;
      }
  }
  return memo[amount];
};