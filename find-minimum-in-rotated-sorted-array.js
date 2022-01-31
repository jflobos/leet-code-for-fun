/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  const getMinPivot = (pivot) => {
      while(pivot >=0 && nums[pivot-1] < nums[pivot]) {
          pivot--;
      }
      return pivot;
  }
  
  let start = 0;
  let end = nums.length - 1;
  if (nums[start] <= nums[end]) {
      return nums[start];
  }
  let pivot = parseInt(nums.length/2);
  let found = false;
  while (!found){
      if (nums[pivot] <= nums[start] && nums[pivot] <= nums[end]) {
          found = true;
      }
      else if(nums[pivot] >= nums[start] && nums[pivot] >= nums[end]) {
          start = pivot;
          pivot = start + Math.max(parseInt((end-start)/2), 1);
      } else {
          start = pivot;
          pivot = pivot - Math.max(parseInt((end-pivot)/2), 1);
      }
  }
  return nums[getMinPivot(pivot)];
};