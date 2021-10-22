/**
 * @param {string} p
 * @return {number}
 */



 var findSubstringInWraproundString = function(p) {
  const uniqueStrings = {};
  let accumulatorLength = 0; 
  const isNextTo = (charA, charB) => {
      if (charA === 'z' && charB === 'a') return true;
      return charA.charCodeAt(0) + 1 === charB.charCodeAt(0);
  }

  const assignCount = (char, accumulatorLength) => {
    if (!uniqueStrings[char]) {
      uniqueStrings[char] = accumulatorLength;    
  } else {
      const currentCount = uniqueStrings[char];
      if (accumulatorLength > currentCount) {
          uniqueStrings[char] = accumulatorLength;
      }
  }
  }

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
      assignCount(p[i], accumulatorLength);
  }
  return Object.values(uniqueStrings).reduce((a,b) => a+b, 0);
};