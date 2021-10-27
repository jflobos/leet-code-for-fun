/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * 
 * 
 * 
 * 
 */


// Example matrix of minimum characters:
//  first: add a base dimension to let the algorithm work.
//  second: for each character lookfor the max value on its left or upper side
//  "abcde"
//  "ace"
//                       a   c   e
//       ┌─────────┬───┬───┬───┬───┐
//       │ (index) │ 0 │ 1 │ 2 │ 3 │
//       ├─────────┼───┼───┼───┼───┤
//       │    0    │ 0 │ 0 │ 0 │ 0 │
//     a │    1    │ 0 │ 1 │ 0 │ 0 │
//     b │    2    │ 0 │ 0 │ 0 │ 0 │
//     c │    3    │ 0 │ 0 │ 1 │ 0 │
//     d │    4    │ 0 │ 0 │ 0 │ 0 │
//     e │    5    │ 0 │ 0 │ 0 │ 1 │
//       └─────────┴───┴───┴───┴───┘

//   When we use the up value and the left value of the table

//                       a   c   e
//       ┌─────────┬───┬───┬───┬───┐
//       │ (index) │ 0 │ 1 │ 2 │ 3 │
//       ├─────────┼───┼───┼───┼───┤
//       │    0    │ 0 │ 0 │ 0 │ 0 │
//     a │    1    │ 0 │ 1 │ 1 │ 1 │
//     b │    2    │ 0 │ 1 │ 1 │ 1 │
//     c │    3    │ 0 │ 1 │ 2 │ 2 │
//     d │    4    │ 0 │ 1 │ 2 │ 2 │
//     e │    5    │ 0 │ 1 │ 2 │ 3 │
//       └─────────┴───┴───┴───┴───┘



 var longestCommonSubsequence = function(text1, text2) {
  const dp = [];
  for (let i = 0; i < text1.length+1; i++) {
      dp.push(Array(text2.length+1).fill(0));
  }
  for (let i = 1; i < text1.length+1; i++) {
      for (let j = 1; j < text2.length+1; j++) {
          if (text1[i-1] === text2[j-1]) {
              dp[i][j] = 1+dp[i-1][j-1];
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
          }
      }
  }
  //console.table(dp);
  return dp[text1.length][text2.length];
};