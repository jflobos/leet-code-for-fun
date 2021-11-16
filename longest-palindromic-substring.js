/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  const isPalindrome = (word) => {
      if (word.length <= 1) {
          return true;
      }
      for (let i = 0; i < Math.floor(word.length/2); i++) {
          if (word[i] !== word[word.length - 1 - i]) {
              return false;
          }
      }
      return true;
  }
  
  for (let i = 0; i < s.length; i++) {
      const length = s.length - i;
      for (let j = 0; j <= i; j++) {
          const candidate = s.substring(j, length+j);
          if (isPalindrome(candidate)) {
              return candidate;
          }
      }
  }
};