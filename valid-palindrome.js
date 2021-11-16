/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  const codeA = 'a'.charCodeAt(0);
  const codeZ = 'z'.charCodeAt(0);
  const code0 = '0'.charCodeAt(0);
  const code9 = '9'.charCodeAt(0);
  
  const validChar = (char) => {
      const code = char.charCodeAt(0);
      return (code >= codeA && code <= codeZ)
          || (code >= code0 && code <= code9);
  }
  let validChars = '';
  for (let i = 0; i < s.length; i++) {
      const undercased = s[i].toLowerCase();
      if (validChar(undercased)) {
          validChars+=undercased;
      }
  }
  const isEvenPhrase = validChars.length % 2 === 0;
  for (let i = 0; i < Math.floor(validChars.length/2); i++) {
      if(validChars[i] !== validChars[validChars.length - 1 -i]) {
          return false;
      }
  }
  return true;
};