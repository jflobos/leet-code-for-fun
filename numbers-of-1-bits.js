/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  let rem;
  let ones = 0;
  for(let i = 0; i< 32; i++) {
      rem = n%2;
      n = Math.floor(n/2);
      if (rem === 1) {
          ones++;
      }
  }
  return ones;
};