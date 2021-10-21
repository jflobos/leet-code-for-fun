/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let localMax = 0;
  let globalMax = Number.NEGATIVE_INFINITY;
  nums.forEach(num => {
      localMax = Math.max(localMax+num, num);
      globalMax = Math.max(globalMax, localMax);
  })
  return globalMax;
};