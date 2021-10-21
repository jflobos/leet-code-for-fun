/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  let localMax = nums[0];
  let localMin = nums[0];
  let globalMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
      tempMax = localMax * nums[i];
      tempMin = localMin * nums[i];
      localMax = Math.max(tempMin, tempMax, nums[i]);
      localMin = Math.min(tempMin, tempMax, nums[i]);
      globalMax = Math.max(localMax, globalMax);
  }
  return globalMax;
};