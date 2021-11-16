/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  let sumS = 0;
  let sumT = 0;
  const codeA = 'a'.charCodeAt(0);
  const lettersS = Array('z'.charCodeAt(0)+1 - codeA).fill(0);
  const lettersT = Array('z'.charCodeAt(0)+1 - codeA).fill(0);
  for (let i = 0; i < s.length; i++) {
      lettersS[s.charCodeAt(i)-codeA] += 1;
      lettersT[t.charCodeAt(i)-codeA] += 1;
  }
  const letters = {
      s: lettersS,
      t: lettersT
  }
  for (let i = 0; i< lettersT.length; i++) {
      if (lettersT[i] !== lettersS[i]) {
          return false;
      }
  }
  return true;
};