/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var majorityElement = function(nums) {
  const trigger = nums.length/3;
  const numberHash = {};
  const selected = {};
  nums.forEach(num => {
      if (!numberHash[num]) {
          numberHash[num] = 1;
      } else {
          numberHash[num] += 1;
      }
      if (numberHash[num] > trigger) {
          selected[num] = num;
      }
  });
  return Object.keys(selected);
};