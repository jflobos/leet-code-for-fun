/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let candidate = null;
  let count = 0; 
  nums.forEach(challenger => {
      if (count === 0) {
          candidate = challenger;
      }
      count += (candidate !== challenger) ? 1 : -1;
  });
  return candidate;
};