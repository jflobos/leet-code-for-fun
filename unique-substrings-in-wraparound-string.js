/**
 * @param {string} p
 * @return {number}
 */



 var findSubstringInWraproundString = function(p) {
    
  const isNextTo = (charA, charB) => {
      if (charA === 'z' && charB === 'a') return true;
      return charA.charCodeAt(0) + 1 === charB.charCodeAt(0);
  }
  
  const uniqueStrings = {};
  let accumulatorLength = 0;
  for (let i = 0; i < p.length; i++) {
      if (i > 0) {
          if (isNextTo(p[i-1], p[i])) {
              accumulatorLength++; 
          } else {
              accumulatorLength = 1;
          }
      } else {
          accumulatorLength = 1;
      }
      if (!uniqueStrings[p[i]]) {
          uniqueStrings[p[i]] = accumulatorLength;    
      } else {
          const currentCount = uniqueStrings[p[i]];
          if (accumulatorLength > currentCount) {
              uniqueStrings[p[i]] = accumulatorLength;
          }
      }
  }
  return Object.values(uniqueStrings).reduce((a,b) => a+b, 0);
};