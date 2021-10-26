/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
  let cache = {0: 1};
  function count(target) {
      if (cache[target] !== undefined) {
          return cache[target];
      }
      let counter = 0;
      nums.forEach(num => {
          const updatedTarget = target - num;
          if (updatedTarget >= 0) {
              counter += count(updatedTarget);
          }
      });
      if(!cache[target]) {
          cache[target] = counter    
      }
      return counter;
  };
  
  const value = count(target);
  return value;
};