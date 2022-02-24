/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    
  const getArea = (left, right) => (right-left) * Math.min(height[right], height[left]);
  
  let globalMax = Number.NEGATIVE_INFINITY;
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  
  while (leftPointer !== rightPointer) {
      globalMax = Math.max(globalMax, getArea(leftPointer, rightPointer));
      if (height[leftPointer] > height[rightPointer]) {
          rightPointer--;
      } else {
          leftPointer++;
      }
  }
  return globalMax;
};