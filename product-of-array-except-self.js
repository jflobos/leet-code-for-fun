/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  let prodWithoutZeros = 1;
  let haveZeros = false;
  for (let i = 0; i< nums.length; i++) {
      if(nums[i] === 0) {
          if(!haveZeros) {
              haveZeros = true;
          } else {
              return new Array(nums.length).fill(0);
          }
      } else {
          prodWithoutZeros *= nums[i];
      }
  }
  return nums.map(num => {
      if(haveZeros && num !==0) {
          return 0;
      } else if(haveZeros && num=== 0 ) {
          return prodWithoutZeros;
      }
      return prodWithoutZeros/num;
  })
};