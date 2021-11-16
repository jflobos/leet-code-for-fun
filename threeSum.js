/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    
  function isValidTriplet(numI, numJ, numK) {
      // console.log(`isValidTriplet(${numI}, ${numJ}, ${numK})`);
      if (numI === numJ && numI === numK) {
          if (numbers[numI] < 3) {
              return false;
          }
      } else if (numI === numJ || numI === numK) {
          if (numbers[numI] < 2) {
              return false;
          }
      } else if (numJ === numK) {
          if (numbers[numJ] < 2) {
              return false;
          }
      }
      return true
  }
  
  function addUniqueTriplet(numI, numJ, numK) {
      const index = [numI,numJ,numK].sort().join(',');
      if (!triplets[index]) {
          triplets[index] = [numI,numJ,numK];
      }
  }
  
  if (nums.length < 3) {
      return [];
  }
  
  const numbers = {};
  const triplets = {};
  nums.forEach((num, i) => {
      if (!numbers[num]) {
          numbers[num] = 0;
      }
      numbers[num]+= 1;
  });
  
  const uniqueNumbers = Object.keys(numbers);
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          if (i<j) {
              const targetNumber = -(nums[i]+nums[j]);
              if (numbers[targetNumber]) {
                  if (isValidTriplet(nums[i], nums[j], -(nums[i]+nums[j]))) {
                      addUniqueTriplet(nums[i], nums[j], -(nums[i]+nums[j]));
                  }
              }    
          }
          
      }
  }
  
  return Object.values(triplets);
};