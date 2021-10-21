/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
      if (!numsMap.get(nums[i])) {
          numsMap.set(nums[i], `${nums[i]}`);
      } else {
          return true;
      }
  }
  return false;
};