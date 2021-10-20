/**
 * @param {number} n
 * @return {number[]}
 */

 var sumZero = function(n) {
  const elements = [];
  for (let i = 0; i< parseInt(n/2); i++) {
      elements.push(i + 1);
      elements.push(-(i + 1));
  }
  if(n%2 !== 0) {
      elements.push(0);
  }
  return elements;
};