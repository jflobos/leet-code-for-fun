/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const openParentheses = ["(", "[", "{"];
  const closingParentheses = [")", "]", "}"];
  
  const parenthesesStack = [];
  
  const matchParentheses = (stacked, candidate) => {
      if (stacked === '(' && candidate === ')') {
          return true;
      } else if (stacked === '[' && candidate === ']') {
          return true;
      } else if (stacked === '{' && candidate === '}') {
          return true;
      }
      return false;
  }
  
  for (let i = 0; i < s.length; i++) {
      if (openParentheses.includes(s[i])) {
          parenthesesStack.push(s[i])
      } else if (closingParentheses.includes(s[i])) {
          const stacked = parenthesesStack.pop();
          if (!matchParentheses(stacked, s[i])) {
              return false;
          }
      }
  }
  return parenthesesStack.length === 0;
};