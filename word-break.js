/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * This isn't a Graph problem itself, it's a search problem
 * It could be written as a Graph but isn't necessary
 * The current solution is a DFS through recursion using memoization
 * The problem with BFS here was about the max size of the wordDict length (1000)
 */
 var wordBreak = function(s, wordDict) {
  const memo = {};
  
  function isFirstWord(currentWord, word) {
      return currentWord.indexOf(word) === 0;
  }
  
  function searchWords(currentWord, wordDict) {
      if (memo[currentWord]) {
          return false;
      }
      for (let i = 0; i < wordDict.length; i++) {
          const word = wordDict[i];
          if (isFirstWord(currentWord, word)) {
              const tempWord = currentWord.replace(word, '');
              if (tempWord.length === 0) {
                  return true
              } else {
                  memo[currentWord] = true;
              }
              const result = searchWords(tempWord, wordDict);
              if (result) {
                  return true;
              }
          }
      }
      return false;
  }
  
  return searchWords(s, wordDict);
  
};