/**
 * @param {character[][]} grid
 * @return {number}
 * 
 * BFS implementation to explore the graph looking for each limit.
 */
 var numIslands = function(grid) {
  let counter = 0;
  const lengthX = grid.length;
  const lengthY = grid[0].length;
  function getAdjacents(i, j) {
      const adjacent = [
          {x: i-1, y: j},
          {x: i+1, y: j},
          {x: i, y: j-1},
          {x: i, y: j+1},
      ];
      return adjacent;
  }
  
  function isValidCoordinate(i,j) {
      if (i < 0 || i === lengthX) {
          return false;
      }
      if (j < 0 || j === lengthY) {
          return false;
      }
      return true;
  }
  
  // BFS implemantation
  function addIslands(i ,j) {
      let queue = [];
      queue.push({x: i, y: j});
      while(queue.length > 0) {
          let x,y;
          [{x,y}, ...queue] = queue;
          if (isValidCoordinate(x,y)) {
              if (grid[x][y] === '1') {
                  const adjacents = getAdjacents(x,y);
                  queue = [...queue, ...adjacents];    
              }
              grid[x][y] = '#';
          }
      }
  }
  
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === "1") {
              addIslands(i,j);
              counter++;
          }
      }
  }
  
  return counter;
};
